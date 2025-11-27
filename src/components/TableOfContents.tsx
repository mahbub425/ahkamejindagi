import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TOCItem {
  title: string;
  page: number;
  children?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  currentPage: number;
  onPageSelect: (page: number) => void;
}

export const TableOfContents = ({ items, currentPage, onPageSelect }: TableOfContentsProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (item: TOCItem, index: number, parentId = '') => {
    const itemId = `${parentId}-${index}`;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(itemId);
    const isActive = item.page === currentPage;

    return (
      <div key={itemId} className="space-y-1">
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(itemId);
            }
            onPageSelect(item.page);
          }}
          className={cn(
            "w-full text-right flex items-center justify-between gap-2 p-2 rounded-md transition-all text-sm",
            "hover:bg-primary/10",
            isActive && "bg-primary/15 border border-primary/30 font-semibold text-primary",
            !isActive && "text-foreground"
          )}
        >
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="text-xs text-muted-foreground min-w-[40px] text-left">
              পৃষ্ঠা {item.page}
            </span>
            <span className="flex-1 text-right">{item.title}</span>
          </div>
          
          {hasChildren && (
            <div className="flex-shrink-0">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className="mr-4 space-y-1 border-r-2 border-primary/20 pr-2">
            {item.children!.map((child, childIndex) =>
              renderItem(child, childIndex, itemId)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-bold text-foreground">সুচিপত্র</h2>
      </div>
      
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          কোন সুচিপত্র নেই
        </p>
      ) : (
        <div className="space-y-1">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      )}
    </div>
  );
};
