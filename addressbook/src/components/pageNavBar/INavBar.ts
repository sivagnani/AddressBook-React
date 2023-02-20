export interface INavBarProps{
    onNavClick:(b:boolean)=>void;
    activePage:boolean;
}
export interface INavBarState{
    home:boolean;
    add:boolean;
}