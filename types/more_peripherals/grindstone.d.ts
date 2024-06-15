/** @noSelf */
declare class Grindstone implements IPeripheral{
    combine(from :string, fromSlot :number, resources :string, resourcesSlot :number) :LuaMultiReturn<[boolean, string | undefined]>
    disenchant(from :string, slot :number, collector? :string) :LuaMultiReturn<[boolean, string | undefined]>
}