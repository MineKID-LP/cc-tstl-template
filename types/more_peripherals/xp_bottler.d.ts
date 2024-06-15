/** @noSelf */
declare class XPBottler implements IPeripheral{
    bottleXP(from :string, to :string, xpCollector :string) :LuaMultiReturn<[boolean, string | undefined]>
}