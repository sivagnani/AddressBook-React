export interface INavBarProps{
    onClick:(b:boolean)=>void;
    activePage:boolean;
}
export interface INavBarState{
    home:boolean;
    add:boolean;
}