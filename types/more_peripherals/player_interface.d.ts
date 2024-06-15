/** @noSelf */
declare class PlayerInterface implements IPeripheral{
    consume(slot :number) :LuaMultiReturn<[boolean, string | undefined]>
    lookAt(x :number, y :number, z :number) :LuaMultiReturn<[boolean, string | undefined]>
    displayMessage(message :string, tooltip?: boolean) :LuaMultiReturn<[boolean, string | undefined]>
}