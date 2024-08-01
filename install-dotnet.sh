#!/bin/bash

# Download and install the .NET SDK
export DOTNET_VERSION=7.0.0
mkdir -p "$HOME/.dotnet"
curl -L https://dotnetcli.azureedge.net/dotnet/Sdk/$DOTNET_VERSION/dotnet-sdk-$DOTNET_VERSION-linux-x64.tar.gz | tar xz -C "$HOME/.dotnet"
export DOTNET_ROOT="$HOME/.dotnet"
export PATH="$DOTNET_ROOT:$PATH"
