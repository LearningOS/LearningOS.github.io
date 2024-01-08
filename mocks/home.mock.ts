import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url: '/api/homepage',
        method: 'get',
        response: () => ({
            code: 0,
            data: {
                banners: [{
                    id: 1,
                    type: 'text',
                    title: '2024春夏季-训练营进行中',
                    desc: '为职业发展打下坚实基础，不断成长为国内操作系统开发的优秀人才！',
                    image: '/src/assets/images/banner1.png',
                    link: '/camp/10001'
                }, {
                    id: 2,
                    type: 'img',
                    title: '2024春夏季-训练营进行中',
                    desc: '为职业发展打下坚实基础，不断成长为国内操作系统开发的优秀人才！',
                    image: '/src/assets/images/banner2.png',
                    link: '/camp/10002'
                }],
                communityData: {
                    students: 1523,
                    partners: 20,
                    authentication: 200
                },
                jobs: [
                    {
                        id: 1,
                        title: '全栈工程师',
                        partnerId: 10001,
                        partner: {
                            id: 10001,
                            name: '上海非凸科技'
                        },
                        requirement: '大专及以上学历，三年及以上经验',
                        salary: '10-15K'
                    },
                    {
                        id: 2,
                        title: '后端工程师',
                        partnerId: 10002,
                        partner: {
                            id: 10002,
                            name: '比亚迪'
                        },
                        requirement: '大专及以上学历，三年及以上经验',
                        salary: '15-18K'
                    }
                ],
                tasks: [
                    {
                        id: 1,
                        title: '第四届OS2数据分析大赛试题',
                        getNumber: 128,
                        claimed: false,
                    },
                    {
                        id: 2,
                        title: 'ArceOS宏内核6个小测验',
                        getNumber: 329,
                        claimed: true
                    },
                ],
                bbs: [
                    {
                        id: 1,
                        title: 'Rust 论坛',
                        logo: '/src/assets/images/bbs_icon1.png',
                        answerNum: 1129
                    },
                    {
                        id: 2,
                        title: 'Rcore 论坛',
                        logo: '/src/assets/images/bbs_icon2.png',
                        answerNum: 1129
                    },
                    {
                        id: 3,
                        title: 'Rust for linux 论坛',
                        logo: '/src/assets/images/bbs_icon1.png',
                        answerNum: 1129
                    },
                ],
                newTypes: [
                    {
                        id: 1,
                        title: 'Rust',
                        weight: 3,
                    }, {
                        id: 2,
                        title: 'Rcore',
                        weight: 2,
                    }, {
                        id: 3,
                        title: 'Rust for linux',
                        weight: 1,
                    }
                ],
                news: [
                    {
                        id: 10001,
                        title: 'Rust 资讯：Rust 1.74.0 正式版发布',
                        intro: 'Rust 团队日前发布了 Rust 的新版本 —— 1.74.0 正式版，Rust 是一种强大的编程语言，使开发者能够构建可靠、高效的软件。',
                        cover: '/src/assets/images/new_cover1.png',
                        content: '',
                        authorId: 10084,
                        author: {
                            id: 10084,
                            name: '阿里小白',
                            avatar: '',
                        },
                        createdAt: new Date().getTime(),
                        viewNum: 22050,
                        likeNum: 2352,
                        collectNum: 689
                    },
                    {
                        id: 10002,
                        title: 'OS2训练营-济南区域学员线下交流活动',
                        intro: '本次活动以开源操作系统为主题展开，鼓励成员分享在实际业务中的实践案例和经验，并为到场用户提供了一个社区专家与用户面对面交流的机会。',
                        cover: '/src/assets/images/new_cover2.png',
                        content: '',
                        authorId: 10084,
                        author: {
                            id: 10085,
                            name: '李大川',
                            avatar: '',
                        },
                        createdAt: new Date().getTime(),
                        viewNum: 22050,
                        likeNum: 2352,
                        collectNum: 689
                    },
                    {
                        id: 10003,
                        title: '2023-12-16 首个 Rust 驱动程序已合并到 netdev/net-next 中',
                        intro: 'Rust 团队日前发布了 Rust 的新版本 —— 1.74.0 正式版，Rust 是一种强大的编程语言，使开发者能够构建可靠、高效的软件。',
                        cover: '/src/assets/images/new_cover3.png',
                        content: '',
                        authorId: 10084,
                        author: {
                            id: 10084,
                            name: '阿里小白',
                            avatar: '',
                        },
                        createdAt: new Date().getTime(),
                        viewNum: 22050,
                        likeNum: 2352,
                        collectNum: 689
                    },
                    {
                        id: 10004,
                        title: 'OS2训练营-Rust-based Robotic Framework Dora-rs',
                        intro: 'Rust 团队日前发布了 Rust 的新版本 —— 1.74.0 正式版，Rust 是一种强大的编程语言，使开发者能够构建可靠、高效的软件。',
                        cover: '/src/assets/images/new_cover4.png',
                        content: '',
                        authorId: 10084,
                        author: {
                            id: 10084,
                            name: '李大川',
                            avatar: '',
                        },
                        createdAt: new Date().getTime(),
                        viewNum: 22050,
                        likeNum: 2352,
                        collectNum: 689
                    },
                ],
                ads: [
                    {
                        title: "清华科技园线下实习申请",
                        desc: "<tab/>为更好的推进训练营第三阶段项目实习进度，我们在清华科技园的科建大厦向合作单位申请到十个线下的工位，可以面向训练营晋级到第三阶段的学员来进行线下实习。<br/><tab/>实习不限项目方向，主要是针对在北京地区高校的学生，以及可以申请离校来京实习的学生，特别是大四/研三明年需要就业的同学。<br/><tab/>请有意愿的同学，扫描下方二维码，填写“清华科技园线下实习申请表”。",
                        qrcodeTitle: " ",
                        qrcodeTitleLink: " ",
                        qrcodeURL: ["https://ssl.cdn.maodouketang.com/FhYlBssVoYmRL6Iv6cyGwU_IYYNw", "https://ssl.cdn.maodouketang.com/Fn15MwCmHnAh59Taq0e6WJw85OT9"],
                        mainScreenBgUrl: "",
                        mainScreenQrUrl: "",
                        extra: [
                            "• 联系人: 李明老师",
                            "• 邮箱: limingth@gmail.com",
                            "• 实习地点: 清华科技园科建大厦",
                        ]
                    },
                    {
                        title: "Dora-rs 网站中文版建设者征集",
                        desc: "<tab/>在周三晚上 Tao 老师的课上，提到了将当前 Dora 网站 https://dora.carsmos.ai/ 翻译为中文，这样可以让更多中国学生和技术爱好者了解到最新的 Dora 进展，减少因为语言而带来的学习困难。<br/><tab/>为此，我们特在课程学员中征集一批志愿者来进行这项翻译工作，这是一次非常好的学习机会，在学习技术的同时也可以学会如何在开源社区做贡献，学习如何在开源项目中彼此协作，建立自己的开源档案。<br/><tab/>请扫下边的二维码，申请加入这项开源工作吧。",
                        qrcodeTitle: " ",
                        qrcodeTitleLink: " ",
                        qrcodeURL: "https://ssl.cdn.maodouketang.com/Fq9e2YKvK7u0ek-3Qr0spgAPPyUq",
                        mainScreenBgUrl: "",
                        mainScreenQrUrl: "",
                        extra: [
                            "• 联系人: 李明",
                            "• 微信号: limingth",
                            "• 截止时间: 2023.11.12 晚12点前"
                        ]
                    }

                ]
            },
        }),
    },
    // 其他针对用户的接口
] as MockMethod[];