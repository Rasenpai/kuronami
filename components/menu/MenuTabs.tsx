import { cn } from "@/lib/cn";
import { menuTabs, type MenuTabId } from "@/lib/menu";

type MenuTabsProps = {
  activeTab: MenuTabId;
  onChange: (tab: MenuTabId) => void;
};

export default function MenuTabs({ activeTab, onChange }: MenuTabsProps) {
  return (
    <div className="mb-6 lg:flex lg:justify-center">
      <div
        role="tablist"
        className="flex gap-1.5 overflow-x-auto border-b border-secondary/20 pb-2 lg:border lg:border-outline-variant/60 lg:bg-surface-container-low lg:p-1 lg:pb-1"
      >
        {menuTabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 whitespace-nowrap border-b-2 px-3.5 py-2 text-left text-label-md uppercase transition-colors duration-200",
                "lg:font-serif lg:text-body-md lg:font-normal lg:normal-case lg:tracking-normal",
                isActive
                  ? "border-primary bg-surface-container/60 font-semibold text-on-surface lg:bg-primary-container lg:text-on-primary"
                  : "border-transparent text-secondary hover:text-on-surface",
              )}
            >
              <span>{tab.label}</span>
              <span className="text-label-sm opacity-80">{tab.kanji}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
