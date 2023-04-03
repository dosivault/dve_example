# 실행법

## Demo

<https://dve-example.vercel.app/>

## 로컬

```bash
yarn
yarn run dev
```

## 기본 API 설명

```javascript
window.onload = async () => {
    if (!window.dosiVault) {
        alert("Please install dosiVault extension");
    } else {
        const chainId = "finschia-1";
 
        // Enabling before using the Dosi Vault.
        // This method will ask the user whether to allow access if they haven't visited this website.
        // Also, it will request that the user unlock the wallet if the wallet is locked.
        await window.dosiVault.enable(chainId);
    
        // You can get the address/public keys by `getAccounts` method.
        // It can return the array of address/public key.
        const accounts = await window.dosiVault.getOfflineSigner("finschia-1").getAccounts();
    }
}
```

- keplr를 기반으로 한다. [keplr 가이드](https://docs.keplr.app/api/)에서 `window.keplr` 대신 `window.dosiVault` 로 치환한다.


## 유의사항

- 공식 가이드가 아닙니다. 변경되거나 삭제될 수 있습니다.
- Chain ID가 `finschia-2` 로 변경될 예정입니다.
