import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type QuoteStatus = 'pending' | 'contacted' | 'quoted' | 'converted' | 'cancelled';
export type ContactStatus = 'new' | 'read' | 'replied' | 'archived';

interface StatusBadgeProps {
  status: QuoteStatus | ContactStatus;
  className?: string;
}

const statusConfig = {
  // Quote statuses
  pending: {
    label: 'Pending',
    className: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20'
  },
  contacted: {
    label: 'Contacted',
    className: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
  },
  quoted: {
    label: 'Quoted',
    className: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  },
  converted: {
    label: 'Converted',
    className: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20'
  },
  // Contact statuses
  new: {
    label: 'New',
    className: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20'
  },
  read: {
    label: 'Read',
    className: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
  },
  replied: {
    label: 'Replied',
    className: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
  },
  archived: {
    label: 'Archived',
    className: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20'
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn('font-medium', config.className, className)}
    >
      {config.label}
    </Badge>
  );
}

