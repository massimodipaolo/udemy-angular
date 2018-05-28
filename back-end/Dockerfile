FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY back-end/back-end.csproj back-end/
RUN dotnet restore back-end/back-end.csproj
COPY . .
WORKDIR /src/back-end
RUN dotnet build back-end.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish back-end.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "back-end.dll"]
