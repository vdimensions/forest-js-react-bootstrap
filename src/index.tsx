import React from "react";
import BreadcrumbsMenu from './BreadcrumbsMenu';
import BreadcrumbsMenuItem from './BreadcrumbsMenuItem';
import BreadcrumbsMenuNavigableItem from './BreadcrumbsMenuNavigableItem';
import ConfirmationDialogFrame from "./ConfirmationDialogFrame";
import DialogSystem from "./DialogSystem";
import NavigationMenu from "./NavigationMenu";
import NavigationMenuItem from "./NavigationMenuItem";
import NavigationMenuNavigableItem from "./NavigationMenuNavigableItem";

let views : React.FC<any>[] = [
    DialogSystem, ConfirmationDialogFrame,
    NavigationMenu, NavigationMenuItem, NavigationMenuNavigableItem,
    BreadcrumbsMenu, BreadcrumbsMenuItem, BreadcrumbsMenuNavigableItem
];

export {CommandButton} from "./CommandButton";
export type {FormField, FormValidationRule, FormValidationState} from "./FormField";

export default views;
