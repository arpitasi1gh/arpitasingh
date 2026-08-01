export default function VisualSeparator() {
    return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20">
      <div className="h-[1px] w-full bg-[var(--color-border)] opacity-60"/>
    </div>
    );
};

// interface VisualSeparatorProps {
//   children?: React.ReactNode;
// }

// export default function VisualSeparator({ children }: VisualSeparatorProps) {
//   return (
//     <div className="w-full bg-[var(--color-surface)] grain py-24 my-12 border-y border-[var(--color-border)]">
//       <div className="max-w-5xl mx-auto px-6">
//         {children || <div className="h-12" />}
//       </div>
//     </div>
//   );
// }
