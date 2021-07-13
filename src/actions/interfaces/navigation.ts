export interface NavigationState {
  name: string;
  selectedMenuIndex: number;
}
export interface PayloadNavigationRoot {
  name: string;
}
export interface PayloadSelectedMenuIndex {
  selectedMenuIndex: number;
}

export interface RootAction {
  type: string;
  payload: PayloadNavigationRoot;
}
