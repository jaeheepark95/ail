"use client";

import * as React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const categories = [
  "Home",
  "Models",
  "Images",
  "Videos",
  "Posts",
  "Articles",
  "Bounties",
  "Events",
  "Shop",
];

export default function Navigation() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {categories.map((category, index) => {
            const lowerCaseCategory = category.toLowerCase();
            const href = category === "Home" ? "/" : `/${lowerCaseCategory}`;
            return (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {category}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
