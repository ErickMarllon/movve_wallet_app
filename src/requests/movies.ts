export interface IMovie {
  id?: string;
  position?: number;
  title: string;
  mimeType: string;
  url: string;
  thumbnail: string;
  description: string;
}

export interface IMovies {
  language: string;
  code: string;
  movies: IMovie[];
}

export const request: IMovies[] = [
  {
    language: "english",
    code: "en",
    movies: [
      {
        id: "1Yqisj4-dtTnbmvbRltsLGs4RMV01vhaN",
        position: 1,
        title: "create Movve Wallet wallet",
        mimeType: "video/mp4",
        url: "/videos/1Yqisj4-dtTnbmvbRltsLGs4RMV01vhaN.mp4",
        thumbnail: "/thumbnails/1Yqisj4-dtTnbmvbRltsLGs4RMV01vhaN.png",
        description:
          "The video shows how to create a Movve Wallet wallet, including downloading, setting a password, backing up the 12 security words, and tips for secure storage.",
      },
      {
        id: "1qxKd8U4yYXdA6QUlKzX4bitz9szQDB3v",
        position: 2,
        title: "accessing wallet",
        mimeType: "video/mp4",
        url: "/videos/1qxKd8U4yYXdA6QUlKzX4bitz9szQDB3v.mp4",
        thumbnail: "/thumbnails/1qxKd8U4yYXdA6QUlKzX4bitz9szQDB3v.png",
        description:
          "After creating and saving your 12 security words, access the wallet main screen, click 'Discover', enter the URL, and create your account in the Move system.",
      },
      {
        id: "13c6JCOImCCJzz4YzxvxEtXtVF7e3J95A",
        position: 3,
        title: "activating your investment",
        mimeType: "video/mp4",
        url: "/videos/13c6JCOImCCJzz4YzxvxEtXtVF7e3J95A.mp4",
        thumbnail: "/thumbnails/13c6JCOImCCJzz4YzxvxEtXtVF7e3J95A.png",
        description:
          'To pay, copy the wallet address, open the app, go to "Assets," select USDT on the TRON-TRC20 network, paste the address, and complete the payment in USDT.',
      },
      {
        id: "1WJqqVx3LmfKslRRHYpxpRiMGhqtHEu15",
        position: 4,
        title: "withdraw",
        mimeType: "video/mp4",
        url: "/videos/1WJqqVx3LmfKslRRHYpxpRiMGhqtHEu15.mp4",
        thumbnail: "/thumbnails/1WJqqVx3LmfKslRRHYpxpRiMGhqtHEu15.png",
        description:
          "The video explains step by step how to withdraw earnings after receiving bonuses by accessing the menu, going to 'My Account', selecting 'Withdrawal', entering the amount, and confirming the transaction.",
      },
      {
        id: "1AkrFrU_mH3tYypSQce7uC98LrYFVsCHI",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/1AkrFrU_mH3tYypSQce7uC98LrYFVsCHI.mp4",
        thumbnail: "/thumbnails/1AkrFrU_mH3tYypSQce7uC98LrYFVsCHI.png",
        title: "Activate Binary Account",
        description:
          "The video explains how to activate a binary account by selecting a side, creating wallets, investing $100 on each side, and unlocking bonuses to start binary trading efficiently.",
      },
      {
        id: "1HBuedwOJFdfSTifkfnwmMjzszDOwkcxQ",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/1HBuedwOJFdfSTifkfnwmMjzszDOwkcxQ.mp4",
        thumbnail: "/thumbnails/1HBuedwOJFdfSTifkfnwmMjzszDOwkcxQ.png",
        title: "Upgrade Investment Account",
        description:
          "The video explains how to upgrade an investment account by adding funds, selecting the upgrade option, paying the required amount, and automatically increasing the account balance efficiently.",
      },
      {
        id: "1b0sO7uuOPY3a5tjanVFHqIco-6FniorP",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1b0sO7uuOPY3a5tjanVFHqIco-6FniorP.mp4",
        thumbnail: "/thumbnails/1b0sO7uuOPY3a5tjanVFHqIco-6FniorP.png",
        title: "Binary System Overview",
        description:
          "The video explains how the binary system tracks user activity, balances sides, distributes daily bonuses, and emphasizes upgrading accounts before the deadline to maximize potential earnings effectively.",
      },
    ],
  },
  {
    language: "日本語",
    code: "ja",
    movies: [
      {
        id: "13tnWNYyaV6rKkdmXrFwhMwAKZ3KIlZJV",
        position: 1,
        title: "TronLinkウォレットを作成",
        mimeType: "video/mp4",
        url: "/videos/13tnWNYyaV6rKkdmXrFwhMwAKZ3KIlZJV.mp4",
        thumbnail: "/thumbnails/13tnWNYyaV6rKkdmXrFwhMwAKZ3KIlZJV.png",
        description:
          "このビデオでは、TronLinkウォレットの作成方法を説明しています。ダウンロード、パスワード設定、12個のセキュリティワードのバックアップ、安全な保管のヒントも含まれます。",
      },
      {
        id: "14lwImykuz7n3vNUlnDbfDR7Ur5s7c6TH",
        position: 2,
        title: "ウォレットにアクセスする",
        mimeType: "video/mp4",
        url: "/videos/14lwImykuz7n3vNUlnDbfDR7Ur5s7c6TH.mp4",
        thumbnail: "/thumbnails/14lwImykuz7n3vNUlnDbfDR7Ur5s7c6TH.png",
        description:
          "12個のセキュリティワードを作成・保存後、ウォレットのメイン画面にアクセスし、「Discover」をクリック、URLを入力してMoveシステムでアカウントを作成します",
      },
      {
        id: "1aTrpDOXAQHaQnK05Iz7tJeA_1r6Oj1Fv",
        position: 3,
        title: "投資を有効化する",
        mimeType: "video/mp4",
        url: "/videos/1aTrpDOXAQHaQnK05Iz7tJeA_1r6Oj1Fv.mp4",
        thumbnail: "/thumbnails/1aTrpDOXAQHaQnK05Iz7tJeA_1r6Oj1Fv.png",
        description:
          "支払いには、ウォレットアドレスをコピーし、アプリで「Assets」に移動してTRON-TRC20ネットワークのUSDTを選択、アドレスを貼り付けて支払いを完了します。",
      },
      {
        id: "1Hx-HoHOKZOvjQ8ZXLZIremH4LgLQ9uUV",
        position: 4,
        title: "出金",
        mimeType: "video/mp4",
        url: "/videos/1Hx-HoHOKZOvjQ8ZXLZIremH4LgLQ9uUV.mp4",
        thumbnail: "/thumbnails/1Hx-HoHOKZOvjQ8ZXLZIremH4LgLQ9uUV.png",
        description:
          "このビデオでは、ボーナス受取後の収益を引き出す方法をステップごとに説明しています。メニューにアクセスし、「マイアカウント」→「出金」で金額を入力し、確認します。",
      },
      {
        id: "18oWrmOXUGm92hOe_2sgsEN-qF3IeKlJg",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/18oWrmOXUGm92hOe_2sgsEN-qF3IeKlJg.mp4",
        thumbnail: "/thumbnails/18oWrmOXUGm92hOe_2sgsEN-qF3IeKlJg.png",
        title: "バイナリーアカウントの有効化",
        description:
          "このビデオでは、サイドを選択し、ウォレットを作成し、各サイドに100ドルを投資してボーナスを解除し、効率的にバイナリー取引を始める方法を説明しています。",
      },
      {
        id: "1XGmlIOzoVIlgYg5RcikJgkSf7CHrGU6g",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/1XGmlIOzoVIlgYg5RcikJgkSf7CHrGU6g.mp4",
        thumbnail: "/thumbnails/1XGmlIOzoVIlgYg5RcikJgkSf7CHrGU6g.png",
        title: "投資アカウントのアップグレード",
        description:
          "このビデオでは、資金を追加し、アップグレードオプションを選択し、必要な金額を支払い、自動的にアカウント残高を効率的に増やす方法を説明しています。",
      },
      {
        id: "1nWswmpU00kPrDQf72RgF5c4j5MPPb1O6",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1nWswmpU00kPrDQf72RgF5c4j5MPPb1O6.mp4",
        thumbnail: "/thumbnails/1nWswmpU00kPrDQf72RgF5c4j5MPPb1O6.png",
        title: "バイナリーシステムの概要",
        description:
          "このビデオでは、バイナリーシステムがユーザーの活動を追跡し、両側のバランスを取り、毎日のボーナスを分配し、期限前にアカウントをアップグレードして収益を最大化する方法を説明しています。",
      },
    ],
  },
  {
    language: "한국어",
    code: "ko",
    movies: [
      {
        id: "1pSkw2bKNWA_TJK4eX-SCg6DXXHYyLtZb",
        position: 1,
        title: "Movve Wallet 지갑 만들기",
        mimeType: "video/mp4",
        url: "/videos/1pSkw2bKNWA_TJK4eX-SCg6DXXHYyLtZb.mp4",
        thumbnail: "/thumbnails/1pSkw2bKNWA_TJK4eX-SCg6DXXHYyLtZb.png",
        description:
          "이 비디오는 Movve Wallet 지갑 생성 방법을 보여줍니다. 다운로드, 비밀번호 설정, 12개의 보안 단어 백업 및 안전한 보관 방법에 대한 팁이 포함됩니다.",
      },
      {
        id: "1Rlf2Tl21hqiODydbB4SAfBViFT_FXXxu",
        position: 2,
        title: "지갑 접속하기",
        mimeType: "video/mp4",
        url: "/videos/1Rlf2Tl21hqiODydbB4SAfBViFT_FXXxu.mp4",
        thumbnail: "/thumbnails/1Rlf2Tl21hqiODydbB4SAfBViFT_FXXxu.png",
        description:
          "12개의 보안 단어를 생성하고 저장한 후 지갑 메인 화면에 접속하고, 'Discover'를 클릭하고 URL을 입력하여 Move 시스템에서 계정을 만듭니다.",
      },
      {
        id: "1BLyySeju_Rx2mN_sCx_1g9plzXKvDJ7n",
        position: 3,
        title: "투자 활성화",
        mimeType: "video/mp4",
        url: "/videos/1BLyySeju_Rx2mN_sCx_1g9plzXKvDJ7n.mp4",
        thumbnail: "/thumbnails/1BLyySeju_Rx2mN_sCx_1g9plzXKvDJ7n.png",
        description:
          '결제를 위해 지갑 주소를 복사하고 앱에서 "Assets"로 이동하여 TRON-TRC20 네트워크의 USDT를 선택한 후 주소를 붙여넣고 결제를 완료합니다.',
      },
      {
        id: "1PTikUx1b5tOpr4WPHznOtTzUVrul3BjO",
        position: 4,
        title: "출금",
        mimeType: "video/mp4",
        url: "/videos/1PTikUx1b5tOpr4WPHznOtTzUVrul3BjO.mp4",
        thumbnail: "/thumbnails/1PTikUx1b5tOpr4WPHznOtTzUVrul3BjO.png",
        description:
          "이 비디오는 보너스 수령 후 수익을 출금하는 방법을 단계별로 설명합니다. 메뉴 접근, '내 계정', '출금' 선택, 금액 입력 및 확인 단계 포함.",
      },
      {
        id: "1bj553oCuscvqtNP9Q3xDkn49HwZ-6C8y",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/1bj553oCuscvqtNP9Q3xDkn49HwZ-6C8y.mp4",
        thumbnail: "/thumbnails/1bj553oCuscvqtNP9Q3xDkn49HwZ-6C8y.png",
        title: "이진 계정 활성화",
        description:
          "이 비디오는 사이드를 선택하고 지갑을 생성한 후 각 사이드에 100달러를 투자하여 보너스를 활성화하고 효율적으로 이진 거래를 시작하는 방법을 설명합니다.",
      },
      {
        id: "1ZJEqIwBrUn8cRf7HUyFmMRAqVNXZFF-D",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/1ZJEqIwBrUn8cRf7HUyFmMRAqVNXZFF-D.mp4",
        thumbnail: "/thumbnails/1ZJEqIwBrUn8cRf7HUyFmMRAqVNXZFF-D.png",
        title: "투자 계정 업그레이드",
        description:
          "이 비디오는 자금을 추가하고 업그레이드 옵션을 선택하며 필요한 금액을 지불하여 계좌 잔액을 효율적으로 자동 증가시키는 방법을 설명합니다.",
      },
      {
        id: "1zU5pH0FKyVh4yWvxKvg9tjD4R_Civx45",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1zU5pH0FKyVh4yWvxKvg9tjD4R_Civx45.mp4",
        thumbnail: "/thumbnails/1zU5pH0FKyVh4yWvxKvg9tjD4R_Civx45.png",
        title: "이진 시스템 개요",
        description:
          "이 비디오는 이진 시스템이 사용자 활동을 추적하고, 양쪽 균형을 유지하며, 일일 보너스를 분배하고, 마감일 전에 계정을 업그레이드하여 수익을 극대화하는 방법을 설명합니다.",
      },
    ],
  },
  {
    language: "中文",
    code: "zh",
    movies: [
      {
        id: "187zJNyucn01Km14QYeQ70rCZoHBHUj_K",
        position: 1,
        title: "创建TronLink钱包",
        mimeType: "video/mp4",
        url: "/videos/187zJNyucn01Km14QYeQ70rCZoHBHUj_K.mp4",
        thumbnail: "/thumbnails/187zJNyucn01Km14QYeQ70rCZoHBHUj_K.png",
        description:
          "视频展示了如何创建 Movve Wallet 钱包，包括下载、设置密码、备份 12 个安全词以及安全存储的建议。",
      },
      {
        id: "1rCCBqlxGLEgnw36PnIWg9L6aZjpfqYOd",
        position: 2,
        title: "访问钱包",
        mimeType: "video/mp4",
        url: "/videos/1rCCBqlxGLEgnw36PnIWg9L6aZjpfqYOd.mp4",
        thumbnail: "/thumbnails/1rCCBqlxGLEgnw36PnIWg9L6aZjpfqYOd.png",
        description:
          "创建并保存12个安全词后，访问钱包主界面，点击“Discover”，输入网址，并在Move系统中创建账户。",
      },
      {
        id: "1r5VykLHUGMz6rovxx3YeQyCaw9ef3Kn5",
        position: 3,
        title: "激活您的投资",
        mimeType: "video/mp4",
        url: "/videos/1r5VykLHUGMz6rovxx3YeQyCaw9ef3Kn5.mp4",
        thumbnail: "/thumbnails/1r5VykLHUGMz6rovxx3YeQyCaw9ef3Kn5.png",
        description:
          "要付款，请复制钱包地址，打开应用，进入“资产”，选择 TRON-TRC20 网络的 USDT，粘贴地址并完成支付。",
      },
      {
        id: "1IhmlwO5Y-aWW2ZDe90ntN6KsxzeIZ9_L",
        position: 4,
        title: "提现",
        mimeType: "video/mp4",
        url: "/videos/1IhmlwO5Y-aWW2ZDe90ntN6KsxzeIZ9_L.mp4",
        thumbnail: "/thumbnails/1IhmlwO5Y-aWW2ZDe90ntN6KsxzeIZ9_L.png",
        description:
          "视频逐步说明了如何在获得奖金后提取收益：访问菜单，进入“我的账户”，选择“提现”，输入金额并确认交易。",
      },
      {
        id: "1NISUwt1VMN8cNlhX2LBW_oJq2CC5WsvZ",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/1NISUwt1VMN8cNlhX2LBW_oJq2CC5WsvZ.mp4",
        thumbnail: "/thumbnails/1NISUwt1VMN8cNlhX2LBW_oJq2CC5WsvZ.png",
        title: "激活二元账户",
        description:
          "视频说明了如何通过选择一侧、创建钱包、在每侧投资100美元并解锁奖金来高效激活二元账户并开始交易。",
      },
      {
        id: "1igjb-9CMz66y3KJLsBvHsMA3zIqFoFQL",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/1igjb-9CMz66y3KJLsBvHsMA3zIqFoFQL.mp4",
        thumbnail: "/thumbnails/1igjb-9CMz66y3KJLsBvHsMA3zIqFoFQL.png",
        title: "升级投资账户",
        description:
          "视频说明了如何通过添加资金、选择升级选项、支付所需金额来高效地自动增加投资账户余额。",
      },
      {
        id: "1zjBgKlgmwNDabiBov_zSWvdOQ1rYWoaK",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1zjBgKlgmwNDabiBov_zSWvdOQ1rYWoaK.mp4",
        thumbnail: "/thumbnails/1zjBgKlgmwNDabiBov_zSWvdOQ1rYWoaK.png",
        title: "二元系统概览",
        description:
          "该视频说明了二元系统如何跟踪用户活动、平衡两侧、分发每日奖金，并强调在截止日期前升级账户以最大化潜在收益。",
      },
    ],
  },
  {
    language: "Español",
    code: "es",
    movies: [
      {
        id: "1zcWeEAzHbzsYTrxh4HfDo0xRoC7ow1rW",
        position: 1,
        title: "crear billetera Movve Wallet",
        mimeType: "video/mp4",
        url: "/videos/1zcWeEAzHbzsYTrxh4HfDo0xRoC7ow1rW.mp4",
        thumbnail: "/thumbnails/1zcWeEAzHbzsYTrxh4HfDo0xRoC7ow1rW.png",
        description:
          "El video muestra cómo crear una billetera Movve Wallet, incluyendo la descarga, configuración de contraseña, respaldo de las 12 palabras de seguridad y consejos para almacenamiento seguro.",
      },
      {
        id: "1WJTT79XFAwcrw_kyRgSKQPAHzMIRSoni",
        position: 2,
        title: "acceder a la billetera",
        mimeType: "video/mp4",
        url: "/videos/1WJTT79XFAwcrw_kyRgSKQPAHzMIRSoni.mp4",
        thumbnail: "/thumbnails/1WJTT79XFAwcrw_kyRgSKQPAHzMIRSoni.png",
        description:
          "Después de crear y guardar sus 12 palabras de seguridad, vaya a la pantalla principal de la billetera, haga clic en 'Descubrir', ingrese la URL y cree su cuenta Move.",
      },
      {
        id: "1TZTk9HuFx0x9mWlcLkYf-7VNWiqMWwQd",
        position: 3,
        title: "activando su inversión",
        mimeType: "video/mp4",
        url: "/videos/1TZTk9HuFx0x9mWlcLkYf-7VNWiqMWwQd.mp4",
        thumbnail: "/thumbnails/1TZTk9HuFx0x9mWlcLkYf-7VNWiqMWwQd.png",
        description:
          'Para pagar, copie la dirección de su billetera, abra la app, vaya a "Assets", seleccione USDT en la red TRON-TRC20, pegue la dirección y complete el pago en USDT.',
      },
      {
        id: "1tsMCPs8HSUYGRbp9ow9PbPd6HhB30Aes",
        position: 4,
        title: "Retirar",
        mimeType: "video/mp4",
        url: "/videos/1tsMCPs8HSUYGRbp9ow9PbPd6HhB30Aes.mp4",
        thumbnail: "/thumbnails/1tsMCPs8HSUYGRbp9ow9PbPd6HhB30Aes.png",
        description:
          "El video explica paso a paso cómo retirar ganancias tras recibir bonos: accediendo al menú, entrando en 'Mi Cuenta', seleccionando 'Retiro', ingresando el monto y confirmando la transacción.",
      },
      {
        id: "1qIXZU00mgzPIsBQ85v_x511VDSt2TjQF",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/1qIXZU00mgzPIsBQ85v_x511VDSt2TjQF.mp4",
        thumbnail: "/thumbnails/1qIXZU00mgzPIsBQ85v_x511VDSt2TjQF.png",
        title: "Activar cuenta binaria",
        description:
          "El video explica cómo activar una cuenta binaria seleccionando un lado, creando billeteras, invirtiendo $100 en cada lado y desbloqueando bonificaciones para comenzar a operar eficientemente.",
      },
      {
        id: "13py1WpBtcp3TUxWkORLej4yZFdXqYBb_",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/13py1WpBtcp3TUxWkORLej4yZFdXqYBb_.mp4",
        thumbnail: "/thumbnails/13py1WpBtcp3TUxWkORLej4yZFdXqYBb_.png",
        title: "Actualizar cuenta de inversión",
        description:
          "El video explica cómo actualizar una cuenta de inversión agregando fondos, seleccionando la opción de actualización, pagando la cantidad requerida y aumentando automáticamente el saldo de la cuenta de manera eficiente.",
      },
      {
        id: "1oe7f1jLRbf8_ckjzdqWevRLftilIJfO_",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1oe7f1jLRbf8_ckjzdqWevRLftilIJfO_.mp4",
        thumbnail: "/thumbnails/1oe7f1jLRbf8_ckjzdqWevRLftilIJfO_.png",
        title: "Resumen del sistema binario",
        description:
          "El video explica cómo el sistema binario rastrea la actividad del usuario, equilibra los lados, distribuye bonificaciones diarias y destaca la importancia de actualizar la cuenta antes del límite para maximizar las ganancias.",
      },
    ],
  },
  {
    language: "Português",
    code: "pt",
    movies: [
      {
        id: "1O6lrEMR4AjR0-zFE7-GyRRQx4UJroaa5",
        position: 1,
        title: "criar carteira Movve Wallet",
        mimeType: "video/mp4",
        url: "/videos/1O6lrEMR4AjR0-zFE7-GyRRQx4UJroaa5.mp4",
        thumbnail: "/thumbnails/1O6lrEMR4AjR0-zFE7-GyRRQx4UJroaa5.png",

        description:
          "O vídeo mostra como criar uma carteira Movve Wallet, incluindo download, configuração de senha, backup das 12 palavras de segurança e dicas de armazenamento seguro.",
      },
      {
        id: "19yC-BK3x6O-6Ddh5uFIFtbyaRfRY56xV",
        position: 2,
        title: "acessando a carteira",
        mimeType: "video/mp4",
        url: "/videos/19yC-BK3x6O-6Ddh5uFIFtbyaRfRY56xV.mp4",
        thumbnail: "/thumbnails/19yC-BK3x6O-6Ddh5uFIFtbyaRfRY56xV.png",
        description:
          "Após criar e salvar suas 12 palavras de segurança, acesse a tela principal da carteira, clique em 'Discover', digite o URL e crie sua conta no Move.",
      },
      {
        id: "1LHdOjyrJ-UQbglBuLIo5PxvLA6JBfdpL",
        position: 3,
        title: "ativando seu investimento",
        mimeType: "video/mp4",
        url: "/videos/1LHdOjyrJ-UQbglBuLIo5PxvLA6JBfdpL.mp4",
        thumbnail: "/thumbnails/1LHdOjyrJ-UQbglBuLIo5PxvLA6JBfdpL.png",
        description:
          'Para pagar, copie o endereço da carteira, acesse o app, vá em "Assets", escolha USDT na rede TRON-TRC20, cole o endereço e conclua o pagamento em USDT.',
      },
      {
        id: "1GsoVnu3i4pDSvZx3kHPIUFDBrftiRRPB",
        position: 4,
        title: "Sacar",
        mimeType: "video/mp4",
        url: "/videos/1GsoVnu3i4pDSvZx3kHPIUFDBrftiRRPB.mp4",
        thumbnail: "/thumbnails/1GsoVnu3i4pDSvZx3kHPIUFDBrftiRRPB.png",
        description:
          "O vídeo explica passo a passo como sacar ganhos após receber bônus, acessando o menu, entrando em 'Minha Conta', selecionando 'Saque', digitando o valor e confirmando a transação.",
      },
      {
        id: "1cix9FE5l5INDs5gfrOxSkIs21qaRXQql",
        position: 5,
        mimeType: "video/mp4",
        url: "/videos/1cix9FE5l5INDs5gfrOxSkIs21qaRXQql.mp4",
        thumbnail: "/thumbnails/1cix9FE5l5INDs5gfrOxSkIs21qaRXQql.png",
        title: "Ativar conta binária",
        description:
          "O vídeo explica como ativar uma conta binária escolhendo um lado, criando carteiras, investindo US$100 em cada lado e desbloqueando bônus para começar a operar com eficiência.",
      },
      {
        id: "1F1XWOypJ2Vxt9ILffTvOy4WvlmQZzR2A",
        position: 6,
        mimeType: "video/mp4",
        url: "/videos/1F1XWOypJ2Vxt9ILffTvOy4WvlmQZzR2A.mp4",
        thumbnail: "/thumbnails/1F1XWOypJ2Vxt9ILffTvOy4WvlmQZzR2A.png",
        title: "Atualizar conta de investimento",
        description:
          "O vídeo explica como atualizar uma conta de investimento adicionando fundos, selecionando a opção de upgrade, pagando o valor necessário e aumentando automaticamente o saldo da conta de forma eficiente.",
      },
      {
        id: "1PMbew7ttrT8xmLx9TQP-mlq3H-UNwjp4",
        position: 7,
        mimeType: "video/mp4",
        url: "/videos/1PMbew7ttrT8xmLx9TQP-mlq3H-UNwjp4.mp4",
        thumbnail: "/thumbnails/1PMbew7ttrT8xmLx9TQP-mlq3H-UNwjp4.png",
        title: "Visão geral do sistema binário",
        description:
          "O vídeo explica como o sistema binário rastreia a atividade dos usuários, equilibra os lados, distribui bônus diários e destaca a importância de atualizar a conta antes do prazo para maximizar os ganhos.",
      },
    ],
  },
];
