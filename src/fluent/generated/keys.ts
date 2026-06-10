import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e5d56522eaf44911bd2fd31de5244339'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '56ede0551ebb4ce99540570545e69bc9'
                    }
                }
            }
        }
    }
}
