export default {
    extends: [ '@commitlint/config-conventional' ],
    rules: {
        'scope-enum': [ 2, 'always', [
            'auth', 'user', 'car', 'admin', 'config', 'docs', 'test', 'deps', 'ci',
        ] ],
        'type-enum': [ 2, 'always', [
            'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert',
        ] ],
        'subject-case': [ 2, 'never', [ 'start-case', 'pascal-case', 'upper-case' ] ],
    },
}
