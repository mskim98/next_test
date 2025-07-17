interface ListItemProps {
  name: string;
  index: number;
  onDelete: (index: number) => void;
}

export function ListItem({ name, index, onDelete }: ListItemProps) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{index + 1}. {name}</span>
      <button
        onClick={() => onDelete(index)}
        className="text-red-500 hover:text-red-700 px-2 py-1 text-sm"
      >
        삭제
      </button>
    </li>
  );
} 