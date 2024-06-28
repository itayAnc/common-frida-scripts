function print_object_properties(obj: Java.Wrapper) {
    for (let field_name in obj) {
        let field_str = `obj.${field_name}`;

        if (eval(field_str).hasAttribute('value')) {
            field_str += '.value';
        }

        console.log(`${field_str} = ${eval(field_str)}`);
    }
}

export {
    print_object_properties
}
