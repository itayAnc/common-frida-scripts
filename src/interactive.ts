function show_toast(message: string) {
    Java.perform(() => {
        Java.scheduleOnMainThread(() => {
            const ToastWidget = Java.use("android.widget.Toast");
            const context = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext();
            const JavaString = Java.use("java.lang.String");

            ToastWidget.makeText(context, JavaString.$new(message), 1).show();
        });
    });
}

function toast_loop(message: string, interval_ms: number) {
    setInterval(show_toast, interval_ms, message);
}

export {
    show_toast,
    toast_loop
}
