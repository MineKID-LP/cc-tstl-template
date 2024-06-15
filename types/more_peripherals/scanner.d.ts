/** @noSelf */
declare class Scanner implements IPeripheral{
    getPage(page :number) :LuaMultiReturn<[boolean, string | undefined]>
    getAuthor() :LuaMultiReturn<[boolean, string | undefined]>
    getTitle() :LuaMultiReturn<[boolean, string | undefined]>
    getCopyStatus() :LuaMultiReturn<[boolean, string | undefined]>
}