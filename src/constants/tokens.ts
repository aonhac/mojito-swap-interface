const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  kcs: {
    symbol: 'KCS',
    projectLink: 'https://www.binance.com/',
  },
  wkcs: {
    symbol: 'WKCS',
    address: {
      321: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      322: '0x6551358EDC7fee9ADAB1E2E49560E68a12E82d9e',
    },
    decimals: 18,
    projectLink: '',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      322: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      322: '0x67f6a7BbE0da067A747C6b2bEdF8aBBF7D6f60dc',
    },
    decimals: 18,
    projectLink: '',
  },
  usdc: {
    symbol: 'USDT',
    address: {
      321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      322: '0xD6c7E27a598714c2226404Eb054e0c074C906Fc9',
    },
    decimals: 18,
    projectLink: '',
  },

  mjt: {
    symbol: 'MJT',
    address: {
      321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      322: '0xAe2933C2aD27984983f9396e25218a70fC791812',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  bry: {
    symbol: 'BRY',
    address: {
      321: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://berrydata.co/',
  },
  zee: {
    symbol: 'ZEE',
    address: {
      321: '0x447544553214474a89358b2c2265883df993b12f0',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://zeroswap.io/',
  },
  swgb: {
    symbol: 'SWGb',
    address: {
      321: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://swirgepay.com/',
  },
  sfp: {
    symbol: 'SFP',
    address: {
      321: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.safepal.io/',
  },
  lina: {
    symbol: 'LINA',
    address: {
      321: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://linear.finance/',
  },
  lit: {
    symbol: 'LIT',
    address: {
      321: '0xb59490ab09a0f526cc7305822ac65f2ab12f32223',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.litentry.com/',
  },
  hget: {
    symbol: 'HGET',
    address: {
      321: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
      322: '',
    },
    decimals: 6,
    projectLink: 'https://www.hedget.com/',
  },
  bdo: {
    symbol: 'BDO',
    address: {
      321: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://bdollar.fi/',
  },
  egld: {
    symbol: 'EGLD',
    address: {
      321: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://elrond.com/',
  },
  ust: {
    symbol: 'UST',
    address: {
      321: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  wsote: {
    symbol: 'wSOTE',
    address: {
      321: '0x541e619858737031a1244a5d0cd47e5ef480342c',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://soteria.finance/#/',
  },
  front: {
    symbol: 'FRONT',
    address: {
      321: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://frontier.xyz/',
  },
  helmet: {
    symbol: 'Helmet',
    address: {
      321: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.helmet.insure/',
  },
  btcst: {
    symbol: 'BTCST',
    address: {
      321: '0x78650b1394715206321b9e7aa7a5e9276814a38e9',
      322: '',
    },
    decimals: 17,
    projectLink: 'https://www.1-b.tc/',
  },
  bscx: {
    symbol: 'BSCX',
    address: {
      321: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://bscex.org/',
  },
  ten: {
    symbol: 'TEN',
    address: {
      321: '0xdff8cb622790b7f92686c722b02cab55592f152c',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.tenet.farm/',
  },
  balbt: {
    symbol: 'bALBT',
    address: {
      321: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://allianceblock.io/',
  },
  asr: {
    symbol: 'ASR',
    address: {
      321: '0x80d5f92c2c8c682070c95495313ddb680b267320',
      322: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  atm: {
    symbol: 'ATM',
    address: {
      321: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
      322: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  og: {
    symbol: 'OG',
    address: {
      321: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
      322: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  reef: {
    symbol: 'REEF',
    address: {
      321: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://reef.finance/',
  },
  ditto: {
    symbol: 'DITTO',
    address: {
      321: '0x233d91a0713155003fc4dce0afa871b508b3b715',
      322: '',
    },
    decimals: 9,
    projectLink: 'https://ditto.money/',
  },
  juv: {
    symbol: 'JUV',
    address: {
      321: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
      322: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  psg: {
    symbol: 'PSG',
    address: {
      321: '0xbc32109612b7c44bef426de600b5fd1379db2ecf1',
      322: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  vai: {
    symbol: 'VAI',
    address: {
      321: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      321: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      322: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  blink: {
    symbol: 'BLINK',
    address: {
      321: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
      322: '',
    },
    decimals: 6,
    projectLink: 'https://blink.wink.org',
  },
  unfi: {
    symbol: 'UNFI',
    address: {
      321: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://unifiprotocol.com',
  },
  twt: {
    symbol: 'TWT',
    address: {
      321: '0x4b0f1812e5df2a032296481ff14017e6005508003',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  hard: {
    symbol: 'HARD',
    address: {
      321: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
      322: '',
    },
    decimals: 6,
    projectLink: 'https://hard.kava.io',
  },
  broobee: {
    symbol: 'bROOBEE',
    address: {
      321: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://roobee.io/',
  },
  stax: {
    symbol: 'STAX',
    address: {
      321: '0x0da6ed8b13214ff28e9ca3229dd37439e8a88f6c4',
      322: '',
    },
    decimals: 18,
    projectLink: 'http://stablexswap.com/',
  },
  nar: {
    symbol: 'NAR',
    address: {
      321: '0xa1303e6199b319a891b79685f0537d289af1fc83',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://narwhalswap.org/',
  },
  nya: {
    symbol: 'NYA',
    address: {
      321: '0xbfa0841f7a90c4ce6643f6517321ee340991f99d5',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://nyanswop.org/',
  },
  ctk: {
    symbol: 'CTK',
    address: {
      321: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
      322: '',
    },
    decimals: 6,
    projectLink: 'https://www.certik.foundation/',
  },
  inj: {
    symbol: 'INJ',
    address: {
      321: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://injectiveprotocol.com/',
  },
  sxp: {
    symbol: 'SXP',
    address: {
      321: '0x47bead23213dcbf3bf2c9407fea4dc236faba485a',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://swipe.io/',
  },
  alpha: {
    symbol: 'ALPHA',
    address: {
      321: '0xa1faa113cbe53436df28ff0aee54275c13b403225',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://alphafinance.io/',
  },
  xvs: {
    symbol: 'XVS',
    address: {
      321: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://venus.io/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      321: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://sushi.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      321: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      321: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
      322: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      321: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://beefy.finance/',
  },
  dusk: {
    symbol: 'DUSK',
    address: {
      321: '0xb2bd0749dbe21f623d9baba8321d3b0f0e1bfec9c',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://dusk.network/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      321: '0xe9e7cea3dedca5984780bafc599bd69add087d321',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      321: '0x2170ed0880ac9a755fd29b26889321bd959f933f8',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  beth: {
    symbol: 'BETH',
    address: {
      321: '0x250632378e573c6be1ac2f322fcdf00515d0aa91b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
  },
  mamzn: {
    symbol: 'mAMZN',
    address: {
      321: '0x3947B992DC0147D2D89dF0392213781b04B25075',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mgoogl: {
    symbol: 'mGOOGL',
    address: {
      321: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mnflx: {
    symbol: 'mNFLX',
    address: {
      321: '0xa04F060077D90Fe2647B61e4dA4aD1F322d6649dc',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  mtsla: {
    symbol: 'mTSLA',
    address: {
      321: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      321: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },

  dai: {
    symbol: 'DAI',
    address: {
      321: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      322: '',
    },
    decimals: 18,
    projectLink: 'http://www.makerdao.com/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      321: '0x3ee2200efb3400fabb9aacf312322cbdd1d435d47',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.cardano.org/',
  },
  band: {
    symbol: 'BAND',
    address: {
      321: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bandprotocol.com/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      321: '0x7083609fce4d1d8dc0c3229aab8c869ea2c873402',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      321: '0x321b6fb708fc5732dec1afc8d85321423a2edccbd6',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://eos.io/',
  },
  link: {
    symbol: 'LINK',
    address: {
      321: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      321: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      321: '0x1d2f0da169ceb9fc7b3144628db1321f3f6c60dbe',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      321: '0x0eb3a705fc54725037cc9e008bdede6322f62f335',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      321: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      321: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    decimals: 18,
    projectLink: 'https://www.tezos.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      321: '0x8ff795a6f4d322e7887c79bea79aba5cc76444adf',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'http://bch.info/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      321: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      321: '0xbf5140a22578168fd3212dccf235e5d43a02ce9b1',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  fil: {
    symbol: 'FIL',
    address: {
      321: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      321: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.bakeryswap.org/',
  },
  burger: {
    symbol: 'BURGER',
    address: {
      321: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
      322: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://burgerswap.org/',
  },
  bdigg: {
    symbol: 'bDIGG',
    address: {
      321: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  bbadger: {
    symbol: 'bBadger',
    address: {
      321: '0x1f7216fdb338247512ec932215587bb322bbf96eae',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://badger.finance/',
  },
  trade: {
    symbol: 'TRADE',
    address: {
      321: '0x7af173f350d916358af3e218bdf2178494beb748',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://unitrade.app/',
  },
  pnt: {
    symbol: 'PNT',
    address: {
      321: '0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  mir: {
    symbol: 'MIR',
    address: {
      321: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  pbtc: {
    symbol: 'pBTC',
    address: {
      321: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ptokens.io/',
  },
  lto: {
    symbol: 'LTO',
    address: {
      321: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ltonetwork.com/',
  },
  pcws: {
    symbol: 'pCWS',
    address: {
      321: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://game.seascape.network/',
  },
  zil: {
    symbol: 'ZIL',
    address: {
      321: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
      322: '',
    },
    decimals: 12,
    projectLink: 'https://www.zilliqa.com/',
  },
  lien: {
    symbol: 'LIEN',
    address: {
      321: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
      322: '',
    },
    decimals: 8,
    projectLink: 'https://lien.finance/',
  },
  swth: {
    symbol: 'SWTH',
    address: {
      321: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
      322: '',
    },
    decimals: 8,
    projectLink: 'https://switcheo.network/',
  },
  dft: {
    symbol: 'DFT',
    address: {
      321: '0x42712dF5009c20fee340B245b510c0395896cF6e',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.dfuture.com/home',
  },
  gum: {
    symbol: 'GUM',
    address: {
      321: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://gourmetgalaxy.io/',
  },
  dego: {
    symbol: 'DEGO',
    address: {
      321: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.dego.finance/home',
  },
  nrv: {
    symbol: 'NRV',
    address: {
      321: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://nerve.fi/',
  },
  easy: {
    symbol: 'EASY',
    address: {
      321: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://easyfi.network/',
  },
  oddz: {
    symbol: 'ODDZ',
    address: {
      321: '0xcd40f2670cf58720b694968698a5514e924f742d',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://oddz.fi/',
  },
  hoo: {
    symbol: 'HOO',
    address: {
      321: '0xe1d1f66215998786110ba0102ef558b22224c016',
      322: '',
    },
    decimals: 8,
    projectLink: 'https://hoo.com/',
  },
  apys: {
    symbol: 'APYS',
    address: {
      321: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://apyswap.com/',
  },
  bondly: {
    symbol: 'BONDLY',
    address: {
      321: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.bondly.finance/',
  },
  tko: {
    symbol: 'TKO',
    address: {
      321: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.tokocrypto.com/',
  },
  itam: {
    symbol: 'ITAM',
    address: {
      321: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://itam.network/',
  },
  arpa: {
    symbol: 'ARPA',
    address: {
      321: '0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://arpachain.io/',
  },
  eps: {
    symbol: 'EPS',
    address: {
      321: '0xa7f552078dcc247c2684336020c03648500c6d9f',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://ellipsis.finance/',
  },
  jgn: {
    symbol: 'JGN',
    address: {
      321: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://jgndefi.com/',
  },
  tlm: {
    symbol: 'TLM',
    address: {
      321: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
      322: '',
    },
    decimals: 4,
    projectLink: 'https://alienworlds.io/',
  },
  perl: {
    symbol: 'PERL',
    address: {
      321: '0x0f9e4d49f25de22c2202af916b681fbb37904322b',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://perlinx.finance/',
  },
  alpa: {
    symbol: 'ALPA',
    address: {
      321: '0xc5e6689c9c8b02be7c49912ef19e79cf243227f03',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://bsc.alpaca.city/',
  },
  hzn: {
    symbol: 'HZN',
    address: {
      321: '0xc0eff7749b125444953ef89682201fb8c6a917cd',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://horizonprotocol.com/',
  },
  suter: {
    symbol: 'SUTER',
    address: {
      321: '0x4cfbbdfbd5bf0814472ff35c72717bd095ada055',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://shield.suterusu.io/',
  },
  cgg: {
    symbol: 'CGG',
    address: {
      321: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://chainguardians.io/',
  },
  mix: {
    symbol: 'MIX',
    address: {
      321: '0xB67754f5b4C704A24d2db68e661b2875a4dDD1322',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://mixie.chainguardians.io/',
  },
}

export default tokens
