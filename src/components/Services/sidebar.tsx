"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,

  BookOpen,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
  isExpanded?: boolean;
}

const navigationData: NavItem[] = [
  {
    title: "Services",
    icon: Rocket,
    children: [
      {
        title: "Business Intelligence & Strategic Insights",
        href: "/services/Business-Intelligence-&-Strategic-Insights",
      },
      { title: "Academic & Thesis Data Analysis", href: "/services/" },
      { title: "Analysis & Statistical Modeling", href: "/services/" },
      { title: "Geospatial Data Analysis", href: "/services/" },
      { title: "Remote Sensing & Oceanography", href: "/services/" },
      { title: "Climate & Environmental Data", href: "/services/" },
      { title: "Predictive Modeling & ML", href: "/services/" },
      { title: "Interactive Data Visualization", href: "/services/" },
      { title: "Automated Data Pipelines", href: "/services/" },
      { title: "Data Cleaning & Preprocessing", href: "/services/" },
    ],
  },
  {
    title: "Get Help With",
    icon: BookOpen,
    children: [
      { title: "SPSS", href: "/category/spss" },
      { title: "R", href: "/category/r" },
      { title: "Python", href: "/category/python" },
      { title: "Excel", href: "/category/excel" },
      {
        title: "Qualitative Data Analysis",
        href: "/category/qualitative-data-analysis",
      },
      {
        title: "Quantitative Data Analysis",
        href: "/category/quantitative-data-analysis",
      },
      { title: "Data Analytics", href: "/category/data-analytics" },
      { title: "Big data", href: "/category/big-data" },
      { title: "Machine Learning", href: "/category/machine-learning" },
    ],
  },
];

function NavItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(item.isExpanded || level === 0);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 w-6 p-0 hover:bg-transparent"
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        )}

        {item.icon && (
          <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
        )}

        {item.href ? (
          <a
            href={item.href}
            className={`flex-1 py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors ${
              level === 0 ? "font-medium" : "text-muted-foreground"
            }`}
          >
            {item.title}
          </a>
        ) : (
          <span
            className={`flex-1 py-2 px-3 text-sm font-medium ${
              level === 0 ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {item.title}
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <NavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="p-6">
      <nav className="space-y-6">
        {navigationData.map((section, index) => (
          <div key={index}>
            <NavItem item={section} />
          </div>
        ))}
      </nav>
    </div>
  );
}
