import { useCallback, useEffect, useState } from "react";

interface UseAsyncReturnProps<T> {
    loading: boolean;
    error: string | undefined;
    value: T | undefined
}

interface UseAsyncProps<T> {
    callback: () => Promise<T>;
    dependencies: any[];
}

export const useAsync = <T>({ callback, dependencies }: UseAsyncProps<T>): UseAsyncReturnProps<T> => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [value, setValue] = useState<T>();

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized])



    return { loading, error, value };
}