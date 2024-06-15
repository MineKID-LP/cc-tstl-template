/** @noSelf */
declare class Crafter implements IPeripheral{
    craft(from :string, to :string, reciple :LuaTable) :LuaMultiReturn<[boolean, string | undefined]>
}