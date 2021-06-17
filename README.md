<p align="center">
  <a href="https://github.com/piotr-vimn/setup-pipenv/actions"><img alt="typescript-action status" src="https://github.com/piotr-vimn/setup-pipenv/workflows/build-test/badge.svg"></a>
</p>

# `piotr-vimn/setup-pipenv` action

WORK IN PROGRESS. GitHub Action to set up Graphviz cross-platform(Linux, macOS, Windows).
# Example usage


```yaml
name: PipEnv CI
on: [push]
jobs:
  test:
    name: Test on node ${{ matrix.node-version }} and ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    steps:
    - uses: actions/checkout@v1
    - name: Setup Python
      uses: piotr-vimn/setup-pipenv@v1
    ...
```

# Contributing

For more info on how to contribute to `setup-pipenv`, see the [CONTRIBUTING](CONTRIBUTING).

# License

This software is released under the MIT License, see [LICENSE](LICENSE).
