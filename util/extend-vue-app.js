export const extend = (app, mixin) => {
    if (!app.mixins) {
        app.mixins = [];
    }
    app.mixins.push(mixin);
};
