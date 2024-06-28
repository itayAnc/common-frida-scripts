function get_object_address(obj: Java.Wrapper) {
    return obj.toString().split('@')[1];
}

export {
    get_object_address
}
