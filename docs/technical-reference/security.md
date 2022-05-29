---
title: Security Vulnerability
version: 2022.04.25
id: 5
---

## Security Vulnerability

> Definition of a security vulnerability.

A _security vulnerability_ is a weakness in a product that could allow an attacker to compromise the integrity, availability, or confidentiality of that product.

> !!! info inline In the discussion that follows, the critical phrases and words are listed from the definition, defined precisely, and explained with examples with how the definition could be applied to real-life cases.

## Weakness in products

**Weakness**: Security vulnerabilities involve inadvertent weaknesses; by-design weaknesses may sometimes occur in a product, but these aren't security vulnerabilities.

_Examples_: The choice to implement a 40-bit cipher in a product would not constitute a security vulnerability, even though the protection it provides would be inadequate for some purposes. In contrast, an implementation error that inadvertently caused a 256-bit cipher to discard half the bits in the key would be a security vulnerability.

### Product

**Product**: Security vulnerabilities are a result of a problem in a product. Problems that result from adhering to imperfect but widely accepted standards are not security vulnerabilities.

_Examples_: A browser that, when connecting to an FTP site, conducts the session in plaintext would not be considered to have a security vulnerability, since the FTP specification calls for plaintext sessions. However, if the browser conducted SSL sessions in plaintext, it would constitute a security vulnerability since the SSL specification calls for encrypted sessions.

### Integrity

**Integrity**: Integrity refers to the trustworthiness of a resource. An attacker that exploits a weakness in a product to modify it silently and without authorization is compromising the integrity of that product.

_Examples_: A weakness that allows an administrator to change the permissions on any file on a system would not be a security vulnerability because an administrator already has this capability. In contrast, if a weakness allowed an unprivileged user to do the same thing, it would _constitute_ a security vulnerability.

### Availability

**Availability**: Availability refers to the possibility to access a resource. An attacker that exploits a weakness in a product, denying appropriate user access to it, is _compromising_ the availability of that product.

_Examples_: A weakness that enables an attacker to cause a server to fail would constitute a security vulnerability, since the attacker would be able to regulate whether the server provided service or not. However, the fact that an attacker could send a huge number of legitimate requests to a server and monopolize its resources would not constitute a security vulnerability, as long as the server operator still could control the computer.

### Confidentiality

**Confidentiality**: Confidentiality refers to limiting access to information on a resource to authorized people. An attacker that exploits a weakness in a product to access non-public information is compromising the confidentiality of that product.

_Examples_: A weakness in a website that enables a visitor to read a file that should not be read would constitute a security vulnerability. However, a weakness that revealed the physical location of a file would not constitute a vulnerability — although such a weakness could be useful for reconnaissance purposes, and could be used in conjunction with a bona fide vulnerability to compromise files, it would not by itself enable an attacker to compromise data, and thus it would not constitute a security vulnerability.
