/** @noSelf */
declare class MagneticCardManipulator implements IPeripheral{
    readCard() :LuaMultiReturn<[boolean | string, string | undefined]>
    writeCard(data :string) :LuaMultiReturn<[boolean, string | undefined]>
    hasCard() :boolean
    ejectCard() :boolean
    setLabel(label :string) :boolean
    getLabel() :LuaMultiReturn<[boolean | string, string | undefined]>
    setSecure(value :boolean) :LuaMultiReturn<[boolean | string, string | undefined]>
}