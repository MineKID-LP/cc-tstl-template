/** @noSelf */
declare class Grinder implements IPeripheral{
    attack() :LuaMultiReturn<[boolean, string | undefined]>
    hasSword() :boolean
    pullSword(from :string, slot :number) :LuaMultiReturn<[boolean, string | undefined]>
    pushSword(to :string) :LuaMultiReturn<[boolean, string | undefined]>
}