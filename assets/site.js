(function () {
    "use strict";

    const root = document.body.dataset.root || "";

    const navItems = [
        { key: "home", label: "网站首页", href: "index.html" },
        {
            key: "overview",
            label: "实验室概况",
            href: "lab-intro.html",
            children: [
                { label: "实验室简介", href: "lab-intro.html" },
                { label: "研究方向", href: "research-directions.html" }
            ]
        },
        {
            key: "news",
            label: "实验室动态",
            href: "news.html",
            children: [
                { label: "新闻动态", href: "news.html" },
                { label: "通知公告", href: "notices.html" }
            ]
        },
        { key: "teams", label: "研究团队", href: "teams.html" },
        {
            key: "people",
            label: "人才队伍",
            href: "people.html",
            children: [
                { label: "研究员", href: "people.html?category=researcher" },
                { label: "副研究员", href: "people.html?category=associate" },
                { label: "助理研究员", href: "people.html?category=assistant" },
                { label: "博士后", href: "people.html?category=postdoc" }
            ]
        },
        {
            key: "achievements",
            label: "科研成果",
            href: "achievements.html",
            children: [
                { label: "专利", href: "achievements.html?category=patent" },
                { label: "获奖", href: "achievements.html?category=award" },
                { label: "软件著作权", href: "achievements.html?category=software" }
            ]
        },
        { key: "publications", label: "论文发表", href: "publications.html" },
        { key: "videos", label: "视频展示", href: "videos.html" }
    ];

    const searchIndex = [
        { category: "网站首页", title: "实验室网站首页", text: "新闻动态、通知公告、实验室简介与两个研究方向。", href: "index.html" },
        { category: "实验室概况", title: "实验室简介", text: "2021年5月由文化和旅游部批准成立，依托厦门大学建设。", href: "lab-intro.html" },
        { category: "实验室概况", title: "研究方向", text: "实验室两个核心研究方向总览。", href: "research-directions.html" },
        { category: "研究方向", title: "闽台非遗文化数字化保护", text: "多模态采集、数字建档、三维重建、数字资产管理、长期保存与公共展示。", href: "research-direction-digital-protection.html" },
        { category: "研究方向", title: "闽台非遗文化智能处理", text: "方言语音、表演动作、文化知识与多模态内容的智能分析、生成和交互。", href: "research-direction-intelligent-processing.html" },
        { category: "实验室动态", title: "新闻动态", text: "实验室项目、会议、媒体报道、调研与两岸民宿标准等新闻。", href: "news.html" },
        { category: "实验室动态", title: "通知公告", text: "会议程序册与学术年会通知。", href: "notices.html" },
        { category: "研究团队", title: "闽台表演艺术数字化与沉浸式叙事创新团队", text: "戏曲、音乐、木偶，多模态采集、数字重建和沉浸叙事。", href: "teams.html#team-performance" },
        { category: "研究团队", title: "闽台方言智能计算团队", text: "闽南方言语料、语音识别、语音合成、大模型与智能交互。", href: "teams.html#team-language" },
        { category: "研究团队", title: "传统建筑与工艺遗产数字化团队", text: "数字测绘、精细建模、修复仿真和活化传承。", href: "teams.html#team-architecture" },
        { category: "研究团队", title: "非遗数字资产化与智能创意设计团队", text: "数字资产管理、智能内容生成与文化创意设计。", href: "teams.html#team-creative" },
        { category: "人才队伍", title: "研究员", text: "实验室研究员与教授队伍。", href: "people.html?category=researcher" },
        { category: "人才队伍", title: "副研究员", text: "实验室副研究员与副教授队伍。", href: "people.html?category=associate" },
        { category: "人才队伍", title: "助理研究员", text: "实验室助理研究员与助理教授队伍。", href: "people.html?category=assistant" },
        { category: "人才队伍", title: "博士后", text: "实验室博士后人员栏目。", href: "people.html?category=postdoc" },
        { category: "科研成果", title: "专利", text: "实验室授权专利和专利申请成果栏目。", href: "achievements.html?category=patent" },
        { category: "科研成果", title: "获奖", text: "实验室团队、项目和作品获奖成果栏目。", href: "achievements.html?category=award" },
        { category: "科研成果", title: "软件著作权", text: "实验室软件著作权成果栏目。", href: "achievements.html?category=software" },
        { category: "论文发表", title: "论文发表", text: "通过年份筛选和关键词搜索实验室论文。", href: "publications.html" },
        { category: "视频展示", title: "视频展示", text: "实验室视频内容展示栏目。", href: "videos.html" },
        { category: "新闻动态", title: "喜报 | 我实验室再获2026年度文化和旅游部重点实验室资助项目", text: "近日，文化和旅游部官网公示2026年度文化和旅游部重点实验室资助项目立项名单，我实验室申报项目《基于灵巧手的提线木偶互动表演系统》成功获批。本项目由厦门大学闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室副主任姚俊峰教授团队牵头，联合厦门辰瑞电子科技有限公司共同攻关，依托机器人灵巧操控、人机交互、智能动作生成等前沿技术，赋能国家级非遗16线提线木偶活态传承创新。经文旅部组织多轮遴选与专家评审，全国本年度入选项目数量有限，本项目成功突围立项。", href: "news/20260715.html" },
        { category: "新闻动态", title: "2026闽台非遗文旅部重战略研讨会在闽江大学召开", text: "2026年7月7日，闽台非遗文旅部重战略研讨会在福建闽江大学召开。本次研讨会由闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室主办，围绕实验室未来重点攻关方向、团队协作机制、闽台特色深化路径等核心议题展开深入研讨。", href: "news/20260710.html" },
        { category: "新闻动态", title: "喜报 | 实验室王量量老师团队学术成果获国家主流媒体报道", text: "6月13日，在第21个“文化和自然遗产日”，中央广播电视台新闻频道（CCTV13）推出文化遗产保护专题报道，聚焦数字技术赋能中华优秀传统文化保护传承。实验室副主任、厦门大学建筑与土木工程学院王量量教授研究团队长期开展的闽浙木拱廊桥数字化保护与传统营造技艺研究作为典型案例受到重点关注。", href: "news/20260615.html" },
        { category: "新闻动态", title: "文化和旅游部科技教育司副司长肖健一行莅临厦门大学闽台非遗文旅部重点实验室调研", text: "2026年4月27日下午，文化和旅游部科技教育司副司长肖健一行，莅临厦门大学闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室开展调研。", href: "news/20260429.html" },
        { category: "新闻动态", title: "全国首个两岸民宿共通标准正式发布", text: "2026年2月5日，福建省市场监督管理局正式批准福建省地方标准《海峡两岸共通旅游民宿服务规范》（标准编号：DB35/T 2295—2026，下文简称《规范》），并予以公布。该标准将于2026年5月5日正式实施。", href: "news/20260324.html" },
        { category: "新闻动态", title: "闽台非遗数字文化基因会议在武夷山召开", text: "2025年12月5日至7日，“福建省人工智能学会2025年学术年会暨闽台非遗数字文化基因会议”在福建武夷山圆满举行。本次会议由福建省人工智能学会主办，武夷学院承办，厦门大学、闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室等多家单位联合协办。会议汇聚了来自浙江大学、北京理工大学、西北大学、厦门大学等高校及两岸文化机构的众多专家学者，共同探讨智能科技赋能文化遗产保护与传承的前沿路径。", href: "news/20251209.html" },
        { category: "新闻动态", title: "厦门大学文旅部重点实验室赋能连城数字文旅创新发展", text: "为推动高校科研成果转化，助力地方文旅产业数字化升级，11月12日至13日，厦门大学闽台非遗文化数字化保护与智能处理文旅部重点实验室与连城县人民政府、元启创新（厦门）机器人有限公司开展系列考察交流活动，以技术赋能为核心，共探校地校企协同发展新路径。", href: "news/20251116.html" },
        { category: "新闻动态", title: "喜报|实验室教师主持的设计项目在第九届新加坡规划师学会规划奖评比中喜获佳绩", text: "近日，新加坡规划师学会揭晓第九届新加坡规划师学会规划奖（SIP Planning Awards）获奖名单，由我校闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室副主任王量量教授、成员韩洁副教授分别主持，建筑与土木工程学院多位师生共同参与的两项设计项目《漳州市南靖县坎下村长荣土楼群文化提升与场所营造》、《泉州市晋江市龙湖镇福林传统村落遗产保护与文化提升》分别获得“城市设计、文化遗产与保育卓越奖” 铜奖、特别提名奖。", href: "news/20251113.html" },
        { category: "新闻动态", title: "福建省文旅厅副厅长林宇一行莅临厦门大学闽台非遗文旅部重点实验室调研", text: "2025年9月16日下午，为落实福建省文化和旅游厅党组 “五抓五聚焦” 工作要求，推进数字文旅产品供给丰富化，省文化和旅游厅党组成员、副厅长林宇一行，莅临厦门大学闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室开展调研指导。", href: "news/20250916.html" },
        { category: "新闻动态", title: "喜报|我实验室获2025年度文化和旅游部重点实验室资助项目", text: "近日，国家文化和旅游部公布了“2025年度文化和旅游部重点实验室资助项目”立项名单。我实验室“非遗密码：闽台乡村建筑遗产营造技艺基因图谱与同源性研究”项目成功获批。", href: "news/20250806.html" },
        { category: "新闻动态", title: "福建省文旅厅科技教育处一行赴厦门大学电影学院考察", text: "11月29日上午，福建省文旅厅科技教育处处长、一级调研员林赪一行赴厦门大学电影学院考察交流，旨在探讨数字科技赋能新文旅、以科技创新助力福建文旅产业的高质量发展、数字科技在文旅产业所取得的研究进展和实践成果等主题。", href: "news/20241203.html" },
        { category: "新闻动态", title: "第三届闽台非遗数字化保护与智能处理学术会议召开", text: "第三届闽台非遗数字化保护与智能处理学术会议于2024年11月29日-12月1日在厦门召开，主题为“数字科技赋能新文旅”；同期举办福建省人工智能学会2024年学术年会，主题为“混合智能”。", href: "news/20241202.html" },
        { category: "新闻动态", title: "福建省人工智能学会2023年学术年会暨第二届闽台非遗数字化保护与智能处理学术会议召开", text: "福建省人工智能学会2023年学术年会暨第二届闽台非遗数字化保护与智能处理学术会议于2023年12月1-3日在福州永泰召开，会议主题为“通用智能与语言模型”；同期举办“第二届闽台非遗数字化保护与智能处理会议”，会议的主题是“非遗的智能处理”。", href: "news/20231212.html" },
        { category: "新闻动态", title: "厦门大学闽台非遗文化数字化保护与智能处理文旅部重点实验室与建筑与土木工程学院受邀参展第六届数字中国建设峰会", text: "厦门大学闽台非遗文化数字化保护与智能处理文旅部重点实验室与建筑与土木工程学院联合多个文旅单位、乡村单位、设计协会等单位，长期在福建省乡村与建筑遗产方面开展多项数字化相关课题工作与研究，获得乡村与建筑遗产数字信息展示平台建设、城乡遗产数字化、文化挖掘与传播等多项科研转化成果。", href: "news/20230413.html" },
        { category: "新闻动态", title: "福建省人工智能学会2022年学术年会暨首届闽台非遗数字化保护与智能处理会议在龙岩市顺利召开", text: "福建省人工智能学会2022年学术年会暨首届闽台非遗数字化保护与智能处理会议于2022年12月9-10日在龙岩市召开，会议主题为“人工智能赋能文旅”，采用“线上+线下”相结合的形式举行。", href: "news/20221215.html" },
        { category: "通知公告", title: "福建省人工智能学会2024年学术年会暨第三届闽台非遗数字化保护与智能处理会议程序册", text: "福建省人工智能学会2024年学术年会暨第三届闽台非遗数字化保护与智能处理会议程序册", href: "notices/20241129.html" },
        { category: "通知公告", title: "关于召开“福建省人工智能学会2024年学术年会暨第三届闽台非遗数字化保护与智能处理会议”的通知", text: "为了更好地促进我省人工智能领域的科技创新，促进智能科学与技术人才队伍的成长，兹定于2024年11月29日-2024年12月1日在厦门召开“福建省人工智能学会2024年学术年会”，会议的主题是“混合智能”；同期举办“第三届闽台非遗数字化保护与智能处理会议”。", href: "notices/20241123.html" },
        { category: "人才队伍", title: "史晓东", text: "实验室主任，厦门大学信息学院教授。", href: "people/shi-xiaodong.html" },
        { category: "人才队伍", title: "姚俊峰", text: "实验室副主任，厦门大学电影学院教授。", href: "people/yao-junfeng.html" },
        { category: "人才队伍", title: "王量量", text: "实验室副主任，厦门大学建筑与土木工程学院教授。", href: "people/wang-liangliang.html" }
    ];

    function icon(path) {
        return `<svg class="portal-icon" aria-hidden="true" viewBox="0 0 24 24">${path}</svg>`;
    }

    function renderHeader() {
        const target = document.querySelector("[data-site-header]");
        if (!target) return;
        const active = document.body.dataset.section || "";
        const nav = navItems.map(function (item) {
            const children = item.children ? `<ul class="portal-subnav">${item.children.map(function (child) {
                return `<li><a href="${root}${child.href}">${child.label}</a></li>`;
            }).join("")}</ul>` : "";
            return `<li class="portal-nav-item${active === item.key ? " is-active" : ""}"><a class="portal-nav-link" href="${root}${item.href}">${item.label}</a>${children}</li>`;
        }).join("");

        target.innerHTML = `
            <a class="skip-link" href="#main-content">跳到主要内容</a>
            <header class="portal-header">
                <div class="portal-utility"><div class="page-shell">
                    <span>${icon('<path d="M19 10c0 4.8-7 11-7 11S5 14.8 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/>')} 福建 · 厦门</span>
                    <div class="portal-utility-links"><a href="https://www.xmu.edu.cn/" target="_blank" rel="noopener">厦门大学主页</a><span aria-hidden="true">/</span><a href="#site-footer">联系我们</a></div>
                </div></div>
                <div class="page-shell portal-brand-row">
                    <a class="portal-brand" href="${root}index.html" aria-label="返回网站首页">
                        <img src="${root}assets/hic-lab-logo.png" alt="" width="100" height="100">
                        <span class="portal-brand-copy"><strong>厦门大学</strong><span>闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室</span></span>
                    </a>
                    <a class="portal-search-link" href="${root}search.html">${icon('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>')}<span>全站搜索</span></a>
                </div>
                <nav class="portal-nav" aria-label="主导航"><div class="page-shell">
                    <button class="portal-nav-toggle" type="button" aria-expanded="false" aria-controls="portal-nav-list">${icon('<path d="M4 7h16M4 12h16M4 17h16"/>')} 网站导航</button>
                    <ul class="portal-nav-list" id="portal-nav-list">${nav}</ul>
                </div></nav>
            </header>`;

        const button = target.querySelector(".portal-nav-toggle");
        const list = target.querySelector(".portal-nav-list");
        button.addEventListener("click", function () {
            const open = list.classList.toggle("is-open");
            button.setAttribute("aria-expanded", String(open));
        });
    }

    function renderFooter() {
        const target = document.querySelector("[data-site-footer]");
        if (!target) return;
        target.innerHTML = `
            <footer class="portal-footer" id="site-footer">
                <div class="portal-footer-pattern" aria-hidden="true"></div>
                <div class="page-shell portal-footer-main">
                    <div class="portal-footer-contact"><h2>联系信息</h2><p>福建省厦门市思明区思明南路 422 号</p><p>邮政编码：361005</p></div>
                    <div><h2>相关链接</h2><div class="portal-footer-links">
                        <a href="https://www.xmu.edu.cn/" target="_blank" rel="noopener">厦门大学</a>
                        <a href="https://www.mct.gov.cn/" target="_blank" rel="noopener">文化和旅游部</a>
                        <a href="https://informatics.xmu.edu.cn/" target="_blank" rel="noopener">信息学院</a>
                        <a href="https://film.xmu.edu.cn/" target="_blank" rel="noopener">电影学院</a>
                        <a href="https://archt.xmu.edu.cn/" target="_blank" rel="noopener">建筑与土木工程学院</a>
                    </div></div>
                </div>
                <div class="portal-footer-bottom"><div class="page-shell"><span>Copyright © 2026 厦门大学闽台非遗文化数字化保护与智能处理文化和旅游部重点实验室</span><a href="#top">返回顶部 ↑</a></div></div>
            </footer>`;
    }

    function initCategoryFilters() {
        document.querySelectorAll("[data-filter-group]").forEach(function (group) {
            const name = group.dataset.filterGroup;
            const buttons = Array.from(group.querySelectorAll("[data-filter]"));
            const targetSelector = group.dataset.filterTargets;
            const targets = Array.from(document.querySelectorAll(targetSelector));
            const param = new URLSearchParams(window.location.search).get("category");
            let current = param && buttons.some(function (button) { return button.dataset.filter === param; }) ? param : (buttons[0] ? buttons[0].dataset.filter : "all");

            function apply(value) {
                current = value;
                buttons.forEach(function (button) {
                    const active = button.dataset.filter === value;
                    button.classList.toggle("is-active", active);
                    button.classList.toggle("is-current", active);
                    button.setAttribute("aria-pressed", String(active));
                    if (button.tagName === "A") {
                        if (active) button.setAttribute("aria-current", "page");
                        else button.removeAttribute("aria-current");
                    }
                });
                targets.forEach(function (target) {
                    const categories = (target.dataset.category || "").split(" ");
                    target.hidden = value !== "all" && !categories.includes(value);
                });
                if (name) group.dataset.current = current;
            }

            buttons.forEach(function (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();
                    const value = button.dataset.filter;
                    apply(value);
                    if (button.tagName === "A") {
                        try {
                            const next = value === "all" ? window.location.pathname : `${window.location.pathname}?category=${encodeURIComponent(value)}`;
                            history.replaceState(null, "", next);
                        } catch (error) {
                            // file:// 预览下仅执行页面内筛选。
                        }
                    }
                });
            });
            apply(current);
        });
    }

    function initPublicationSearch() {
        const form = document.querySelector("[data-publication-form]");
        if (!form) return;
        const year = form.querySelector("[name=year]");
        const input = form.querySelector("[name=keyword]");
        const items = Array.from(document.querySelectorAll(".publication-item"));
        const count = document.querySelector("[data-publication-count]");
        const empty = document.querySelector("[data-publication-empty]");

        function apply() {
            const selectedYear = year.value;
            const keyword = input.value.trim().toLowerCase();
            let visible = 0;
            items.forEach(function (item) {
                const yearMatch = selectedYear === "all" || item.dataset.year === selectedYear;
                const keywordMatch = !keyword || item.textContent.toLowerCase().includes(keyword);
                item.hidden = !(yearMatch && keywordMatch);
                if (!item.hidden) visible += 1;
            });
            count.textContent = `共找到 ${visible} 条记录`;
            empty.hidden = visible !== 0;
        }

        form.addEventListener("submit", function (event) { event.preventDefault(); apply(); });
        year.addEventListener("change", apply);
        input.addEventListener("input", apply);
        apply();
    }

    function initGlobalSearch() {
        const form = document.querySelector("[data-global-search-form]");
        if (!form) return;
        const input = form.querySelector("[name=q]");
        const results = document.querySelector("[data-search-results]");
        const count = document.querySelector("[data-search-count]");
        const initial = new URLSearchParams(window.location.search).get("q") || "";
        input.value = initial;

        function apply() {
            const query = input.value.trim().toLowerCase();
            const matches = searchIndex.filter(function (item) {
                return !query || `${item.category} ${item.title} ${item.text}`.toLowerCase().includes(query);
            });
            count.textContent = query ? `“${input.value.trim()}”共找到 ${matches.length} 条结果` : `全站共收录 ${matches.length} 条可搜索内容`;
            results.innerHTML = "";
            matches.forEach(function (item) {
                const link = document.createElement("a");
                link.className = "search-result";
                link.href = `${root}${item.href}`;
                const category = document.createElement("small");
                category.textContent = item.category;
                const title = document.createElement("h3");
                title.textContent = item.title;
                const text = document.createElement("p");
                text.textContent = item.text;
                link.append(category, title, text);
                results.appendChild(link);
            });
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const query = input.value.trim();
            try {
                history.replaceState(null, "", query ? `search.html?q=${encodeURIComponent(query)}` : "search.html");
            } catch (error) {
                // file:// 直接预览时部分浏览器不允许改写历史地址，但不影响搜索结果。
            }
            apply();
        });
        input.addEventListener("input", apply);
        apply();
    }

    renderHeader();
    renderFooter();
    initCategoryFilters();
    initPublicationSearch();
    initGlobalSearch();
}());
