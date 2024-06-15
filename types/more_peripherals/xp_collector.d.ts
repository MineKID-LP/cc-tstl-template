/** @noSelf */
declare class XPCollector implements IPeripheral{
    dumpXP() :LuaMultiReturn<[boolean, string | undefined]>
    getCurrentXP() :number
}