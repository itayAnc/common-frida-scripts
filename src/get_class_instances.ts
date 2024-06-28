function class_exists(class_name: string) {
    return !!Java.classFactory.loader?.find(class_name);
}

function get_class_object(class_name: string) {
    const classes = Java.enumerateLoadedClassesSync();

    for (const class_object of classes) {
        if (class_object.match(class_name)) {
            return Java.use(class_object);
        }
    }

    throw "Error can't find class " + class_name;
}

function get_class_instances<T>(class_name: string) {
    let class_instances: Java.Wrapper[] = [];
    let enumeration_done = false;

    Java.choose(
        class_name,
        {
            onMatch: (class_instance) => {
                class_instances.push(class_instance)
            },
            onComplete: () => { enumeration_done = true; }
        }
    );

    while (!enumeration_done);
    return class_instances;
}

export {
    class_exists,
    get_class_object,
    get_class_instances
}
