/** @noSelf */
declare class SpawnerInterface implements IPeripheral{
    getCurrentlySpawningMob() :LuaMultiReturn<[boolean | string, string | undefined]>
    captureSpawner(inventory :string, slot :number) :LuaMultiReturn<[boolean, string | undefined]>
    changeSpawner(inventory :string, slot :number, force? :boolean) :LuaMultiReturn<[boolean, string | undefined]>
}