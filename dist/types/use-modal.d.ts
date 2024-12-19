export declare const useModal: () => {
    show: import("vue").Ref<boolean, boolean>;
    vnode: import("vue").Ref<any, any>;
    close: () => void;
    redirect: () => void;
    props: import("vue").ComputedRef<Record<string, any>>;
};
