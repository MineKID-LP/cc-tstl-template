/** @noSelf */
declare class Loom implements IPeripheral{
    paintBanner(input :string, bannerSlot :number, dyeSlot :number, pattern :number) :LuaMultiReturn<[boolean, string | undefined]>
    clearBanner(intput :string, slot :number) :LuaMultiReturn<[boolean, string | undefined]>
}