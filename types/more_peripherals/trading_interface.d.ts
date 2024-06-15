/** @noSelf */
declare class TradingInterface implements IPeripheral{
    getProfession() :LuaMultiReturn<[boolean, string | undefined]>
    getTrades() :LuaMultiReturn<[boolean, string | LuaTable]>
    trade(from :string, to :string, trade :number) :LuaMultiReturn<[boolean, string | undefined]>
    restock() :LuaMultiReturn<[boolean, string | undefined]>
    cycleTrades() :LuaMultiReturn<[boolean, string | undefined]>
}