/** @noSelf */
declare class Anvil implements IPeripheral{
    combine(from :string, fromSlot :number, resources :string, resourcesSlot :number, xpSource :string) :LuaMultiReturn<[boolean, string | undefined]>
    rename(from :string, slot :number, name :string) :LuaMultiReturn<[boolean, string | undefined]>
}