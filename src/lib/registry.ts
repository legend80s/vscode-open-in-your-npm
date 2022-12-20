/**
 *
 * @param {string} pkg
 * @returns {string}
 */
export function getNpmUrl(pkg) {
  const registries = [
    [/^@ali/, 'https://web.npm.alibaba-inc.com'],
    // [/^@something/, 'https://some.npmjs.com?package=${pkg}'],
    [/.+/, 'https//www.npmjs.com'],
  ] as const

  let reg: string;
  for (const [regexp, registry] of registries) {
    if (regexp.test(pkg)) {
      reg = registry;
    }
  }

  let url = `${reg}/package/${pkg}`

  if (reg.includes('${pkg}')) {
    url = reg.replace('${pkg}', pkg)
  }

  return url
}
