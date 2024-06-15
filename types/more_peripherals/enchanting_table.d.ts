/** @noSelf */
declare class EnchantingTable implements IPeripheral{
    getEnchantsFor(from :string, slot :number) :LuaMultiReturn<[boolean, string | LuaTable]>
    enchant(from :string, slot :number, resources :string) :LuaMultiReturn<[boolean, string | undefined]>
}