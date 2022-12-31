# rnID

> A light, secure, unique String ID generator for JavaScript.

- There are four types of IDs that can be selected
- Number of characters can be changed by the user

## rnId()

- Uppercase and Lowercase alphabet
- Default Character is 6

```javascript
rnId(); //AliHOsAn
```

## upId()

- Just Uppercase Alphabet
- Default Character is 6

```javascript
upId(); // AMIRALIO
```

## lowId()

- Just Lowercase Alphabet
- Default Character is 6

```javascript
lowId(); // alyazahr
```

## numId()

- Just Numbers
- Default Character is 6

```javascript
numId(); // 11033125
```

## mxId()

- Number , Alphabet and special character
- Default Character is 16

```javascript
mxId(); // Lih&56$OKjud#q%a
```

---

the ID character can change so easy like

```javascript
numId(4); // 3895
```

---

# Quickstart

To create a random rnId

1. install

```bash
npm i rnid
```

2. Import

```javascript
import { rnId, upId } from "rnid";

upId();
rnId();
```
