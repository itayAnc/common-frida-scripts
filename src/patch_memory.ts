function write_int(addresses: string[], target_value: number | Int64) {
    for (var i = 0; i < addresses.length; ++i) {
        const address = new NativePointer(addresses[i]);
        address.writeInt(target_value);
    }
}

export {
    write_int
}
