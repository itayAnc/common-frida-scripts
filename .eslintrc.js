const baseExtends = ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'plugin:react-hooks/recommended'];

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: { version: '16' },
    },
    plugins: ['prettier', 'jest', '@typescript-eslint', 'no-only-tests', 'react-hooks', 'react-hooks-static-deps'],
    extends: baseExtends,
    env: {
        node: true,
        es2020: true,
        'jest/globals': true,
    },
    rules: {
        strict: 0,
        'react/prop-types': 0,
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
                endOfLine: 'lf',
                propTypes: false,
                bracketSpacing: true,
            },
        ],
        'react/no-unescaped-entities': 0,
        'react/display-name': 'off',
        'no-prototype-builtins': 'off',
        'no-empty': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks-static-deps/exhaustive-deps': [
            'warn',
            {
                // These hooks are defined to be static for react-hooks/exhaustive-deps eslint rule.
                // It means that they are stable and shouldn't be added to the dependency array.
                // See: https://www.npmjs.com/package/eslint-plugin-react-hooks-static-deps
                staticHooks: {
                    useStoreStatic: true,
                    useStoreActions: true,
                    useIsMounted: true,
                    useGlobalContext: {
                        getOpenedModals: true,
                        showModal: true,
                        hideModal: true,
                        hideAllModals: true,
                        startLoader: true,
                        stopLoader: true,
                        showErrorToast: true,
                        showSuccessToast: true,
                    },
                    useGTMDispatch: true,
                    useGtm: true,
                    useEventTargets: true,
                    useInternalEventReporter: true,
                    useEventReporter: true,
                    useStateInRef: true,
                    useHistory: true,
                    useIntegrations: true,
                    useIoContext: true,
                    useServiceTemplateApi: true,
                    useBillCommands: true,
                    useVoidInvoice: true,
                    useApproveAmendments: true,
                    useApproveCharges: true,
                    useApproveInvoices: true,
                    useUpdateProgressStatus: true,
                    useCopyDirectLink: true,
                    useSendReminder: true,
                    useDebouncedLogSearchToBI: true,
                    useRelationshipDraftApi: true,
                    usePusher: true,
                    usePusherBusinessChannel: { getChannel: true },
                    useForm: true,
                    useFormContext: true,
                    useQboIntegration: {
                        fetchAndGetQboIntegration: true,
                    },
                    useStateFromUrl: {
                        changeUrlState: true,
                    },
                    useHomePage: {
                        setHidden: true,
                    },
                    useOpenCopyLinkModal: true,
                    useSignal: [false, true],
                    useRestfulWrapper: {
                        refresh: true,
                    },
                },
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [...baseExtends, 'plugin:@typescript-eslint/recommended'],
            rules: {
                'no-unused-vars': 'off',
                'react/prop-types': 'off',
                'react/display-name': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                'no-only-tests/no-only-tests': 'error',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                'react/no-unescaped-entities': 'off',
                'react-hooks/exhaustive-deps': 'off',
            },
        },
    ],
    globals: {
        window: true,
        navigator: true,
        document: true,
        history: true,
        FileReader: true,
        performance: true,
        location: true,
        localStorage: true,
        Cypress: true,
        cy: true,
        Sentry: true,
        alert: true,
        File: true,
        Blob: true,
        fetch: true,
    },
};
