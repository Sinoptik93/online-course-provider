import propertyGroups from 'stylelint-config-recess-order/groups';

/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        'order/properties-order': propertyGroups.map(group => ({
            ...group,
            emptyLineBefore: 'always',
            noEmptyLineBetween: true,
        })),
        'declaration-empty-line-before': null,
        'custom-property-pattern': null,
        'selector-class-pattern': null,
        'custom-property-empty-line-before': null,
        'block-no-empty': null,
    },
};
