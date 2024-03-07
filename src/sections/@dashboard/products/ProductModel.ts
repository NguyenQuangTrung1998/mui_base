export interface MenuChildrenItemModel{
    name:string
    value:string
    id:string
}
export interface MenuItemModel{
    label:string
    value:string
    options?:MenuChildrenItemModel[]
}
export interface MenuItemTable{
    items:MenuItemModel[]
    count?:number
}