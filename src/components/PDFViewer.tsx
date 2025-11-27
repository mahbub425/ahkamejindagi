import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Search, Bookmark, BookmarkCheck, BookOpen, Menu } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { TableOfContents, TOCItem } from '@/components/TableOfContents';
import { tocData } from '@/data/tocData';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface BookmarkType {
  pageNumber: number;
  note?: string;
  timestamp: number;
}

interface PDFViewerProps {
  fileUrl: string;
}

export const PDFViewer = ({ fileUrl }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchPage, setSearchPage] = useState<string>('');
  const [scale, setScale] = useState<number>(1.0);
  const isMobile = window.innerWidth < 768;
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('toc');
  const { toast } = useToast();

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('pdf-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const saveBookmarks = (newBookmarks: BookmarkType[]) => {
    localStorage.setItem('pdf-bookmarks', JSON.stringify(newBookmarks));
    setBookmarks(newBookmarks);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleSearch = () => {
    const page = parseInt(searchPage);
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
      toast({
        title: "পেজ খুঁজে পাওয়া গেছে",
        description: `পেজ ${page} এ গেছেন`,
      });
    } else {
      toast({
        title: "ভুল পেজ নম্বর",
        description: `১ থেকে ${numPages} এর মধ্যে একটি নম্বর দিন`,
        variant: "destructive",
      });
    }
  };

  const toggleBookmark = () => {
    const existingIndex = bookmarks.findIndex((b) => b.pageNumber === pageNumber);
    
    if (existingIndex !== -1) {
      const newBookmarks = bookmarks.filter((_, i) => i !== existingIndex);
      saveBookmarks(newBookmarks);
      toast({
        title: "বুকমার্ক মুছে ফেলা হয়েছে",
        description: `পেজ ${pageNumber} থেকে বুকমার্ক সরানো হয়েছে`,
      });
    } else {
      const newBookmark: BookmarkType = {
        pageNumber,
        timestamp: Date.now(),
      };
      const newBookmarks = [...bookmarks, newBookmark].sort((a, b) => a.pageNumber - b.pageNumber);
      saveBookmarks(newBookmarks);
      toast({
        title: "বুকমার্ক যোগ করা হয়েছে",
        description: `পেজ ${pageNumber} বুকমার্ক করা হয়েছে`,
      });
    }
  };

  const isBookmarked = bookmarks.some((b) => b.pageNumber === pageNumber);

  const goToBookmark = (page: number) => {
    setPageNumber(page);
    toast({
      title: "বুকমার্কে গেছেন",
      description: `পেজ ${page} এ গেছেন`,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden touch-none">
      {/* Header */}
      <header className="h-14 md:h-header border-b border-border bg-card px-3 md:px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 md:gap-4 flex-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="h-8 w-8 md:h-10 md:w-10"
          >
            <Menu className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <h1 className="text-sm md:text-xl font-bold text-foreground truncate">আহকামে যিন্দেগী</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <div className="flex items-center gap-1 md:gap-2">
            <Input
              type="number"
              placeholder="পেজ"
              value={searchPage}
              onChange={(e) => setSearchPage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-16 md:w-32 text-xs md:text-sm h-8 md:h-10"
              min={1}
              max={numPages}
            />
            <Button onClick={handleSearch} variant="secondary" size="icon" className="h-8 w-8 md:h-10 md:w-10">
              <Search className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          {/* Bookmark Toggle */}
          <Button
            onClick={toggleBookmark}
            variant={isBookmarked ? "default" : "outline"}
            size="icon"
            className="relative h-8 w-8 md:h-10 md:w-10"
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
              <Bookmark className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with TOC and Bookmarks */}
        {sidebarOpen && (
          <aside className="fixed md:relative inset-0 md:inset-auto w-full md:w-sidebar border-r border-border bg-muted/30 md:bg-muted/30 overflow-hidden flex flex-col z-20 md:z-auto">
            <div className="absolute inset-0 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
            <div className="relative w-4/5 max-w-sm md:w-full h-full bg-background md:bg-transparent flex flex-col">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
                <TabsTrigger value="toc" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>সুচিপত্র</span>
                </TabsTrigger>
                <TabsTrigger value="bookmarks" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  <span>বুকমার্ক</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="toc" className="flex-1 overflow-y-auto p-4 mt-0">
                <TableOfContents
                  items={tocData}
                  currentPage={pageNumber}
                  onPageSelect={(page) => {
                    setPageNumber(page);
                    toast({
                      title: "পেজে গেছেন",
                      description: `পেজ ${page} এ গেছেন`,
                    });
                  }}
                />
              </TabsContent>

              <TabsContent value="bookmarks" className="flex-1 overflow-y-auto p-4 mt-0">
                {bookmarks.length === 0 ? (
                  <div className="text-center py-8">
                    <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">কোন বুকমার্ক নেই</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      উপরের বুকমার্ক আইকনে ক্লিক করে যোগ করুন
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="font-semibold mb-3 text-foreground">সংরক্ষিত পেজ সমূহ</h3>
                    {bookmarks.map((bookmark) => (
                      <button
                        key={bookmark.pageNumber}
                        onClick={() => goToBookmark(bookmark.pageNumber)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-all hover:bg-primary/10 border border-transparent hover:border-primary/30",
                          bookmark.pageNumber === pageNumber && "bg-primary/15 border-primary/50 shadow-sm"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">পেজ {bookmark.pageNumber}</span>
                          <BookmarkCheck className="h-4 w-4 text-primary" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
            </div>
          </aside>
        )}

        {/* PDF Viewer */}
        <main className="flex-1 overflow-auto overscroll-none">
          <div className="flex flex-col items-center py-4 md:py-8 px-2 md:px-4">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-4 md:mb-6 w-full max-w-full">
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex items-center justify-center h-[400px] md:h-[600px] w-full md:w-[450px]">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-xs md:text-sm text-muted-foreground">লোড হচ্ছে...</p>
                    </div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={isMobile ? Math.min(scale, window.innerWidth / 500) : scale}
                  width={isMobile ? window.innerWidth - 32 : undefined}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 md:gap-4 bg-card border border-border rounded-lg p-2 md:p-4 shadow-md w-full max-w-full justify-center">
              <Button
                onClick={goToPreviousPage}
                disabled={pageNumber <= 1}
                variant="outline"
                size="icon"
                className="h-10 w-10 md:h-12 md:w-12"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              <div className="text-center min-w-[80px] md:min-w-[120px]">
                <p className="text-xs md:text-sm font-medium text-foreground">
                  পেজ {pageNumber} / {numPages}
                </p>
              </div>

              <Button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                variant="outline"
                size="icon"
                className="h-10 w-10 md:h-12 md:w-12"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              <div className="hidden md:flex border-l border-border pl-4 ml-2 items-center">
                <Button
                  onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                  variant="ghost"
                  size="sm"
                >
                  -
                </Button>
                <span className="mx-2 text-sm text-muted-foreground">{Math.round(scale * 100)}%</span>
                <Button
                  onClick={() => setScale(Math.min(2, scale + 0.1))}
                  variant="ghost"
                  size="sm"
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
