var _____WB$wombat$assign$function_____ = function(name) {
    return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name)) || globalThis[name];
};
if (!globalThis.__WB_pmw) {
    globalThis.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");
    "use strict";
    (self.webpackChunk = self.webpackChunk || []).push([[170], {
        5748: () => {
            function o(i=1) {
                let t = $("#member-rank :selected").val();
                $.getJSON(`/api/clans/members/${$('meta[name="clan_id"]').attr("content")}/${t}/${i}/12`, e => {
                    let l = "";
                    for (let a in e.data) {
                        let r = e.data[a].user
                          , c = "";
                        $("#member-rank option").each(function() {
                            ($(this).val() < 100 || t == 100) && (c += `<option value=${$(this).val()} ${$(this).val() == t ? "selected" : ""}>${new Option($(this).text()).innerHTML}</option>`)
                        }),
                        l += `<div class="edit-member inline center-text" style="position:relative;">
                        <a href="/user/${r.id}/">
                            <div class="clan-member ellipsis">
                                <img src="${BH.avatarImg(r.id)}" style="width:115px;height:115px;">
                                <div class="ellipsis">${new Option(r.username).innerHTML}</div>
                            </div>
                        </a>
                        ${e.data[a].rank != 100 ? `<form method="POST" action="https://bhrewritten.vercel.app/clan/edit">
                            <input type="hidden" name="_token" value="${$('meta[name="csrf-token"]').attr("content")}">
                            <input type="hidden" name="type" value="kick_user">
                            <input type="hidden" name="clan_id" value="${$('meta[name="clan_id"]').attr("content")}">
                            <input type="hidden" name="user_id" value="${r.id}">
                            <i class="fas fa-ban" style="position:absolute;top:12px;left:12px;cursor:pointer;" title="Kick" onclick="$(this).parent().submit()"></i>
                        </form>` : ""}
                        <div style="width:120px;padding-left:12px;">
                            <select class='select edit-member-select' name="value" ${e.data[a].rank == 100 ? "disabled" : ""} data-user="${r.id}">
                                ${c}
                            </select>
                        </div>
                    </div>`
                    }
                    let s = "";
                    for (let a of e.pages.pages)
                        s += `<a class="page${a == i ? " active" : ""}" onclick="loadEditMembers(${a})">${a}</a>`;
                    $(".member-pages").html(s),
                    $(".edit-holder").html(l)
                }
                )
            }
            function n(i) {
                if ($(i.target).hasClass("forum-create-button") || i.keyCode == 13) {
                    let t = $("#clan-search-bar").val();
                    if (t == "")
                        return $(".relation-holder").html("");
                    $.getJSON(`/api/clans/relations/${$('meta[name="clan_id"]').attr("content")}/${t}/`, e => {
                        let l = "";
                        if (e.data.length == 0)
                            return $(".relation-holder").html("No clans found");
                        for (let s in e.data) {
                            let a = e.data[s];
                            l += `<div class="clan-relation" style="padding:5px;position:relative;">
                            <a href="/clan/${a.id}/">
                                <img src="${BH.storage_domain}/images/clans/${a.thumbnail}.png" style="width:75px;height:75px;">
                                <span class="clan-name ellipsis">${new Option(a.title).innerHTML}</span>
                            </a>
                            <form method="POST" action="https://web.archive.org/web/20230328123501/https://www.brick-hill.com/clan/edit" class="clan-form">
                                <input type="hidden" name="_token" value="${$('meta[name="csrf-token"]').attr("content")}">
                                <input type="hidden" name="type" value="new_relation">
                                <input type="hidden" name="clan_id" value="${$('meta[name="clan_id"]').attr("content")}">
                                <input type="hidden" name="to_id" value="${a.id}">
                                <input class="button small smaller-text mr1 green upload-submit" type="submit" value="ALLY" name="ally">
                                <input class="button small smaller-text red upload-submit" type="submit" value="ENEMY" name="enemy">
                            </form>
                        </div>`
                        }
                        $(".relation-holder").html(l)
                    }
                    )
                }
            }
            window.loadEditMembers = o,
            window.searchRelationClans = n
        }
        ,
        9138: () => {
            function o(n, e) {
                var t, e = e || 200;
                return function() {
                    var l = this
                      , s = arguments;
                    clearTimeout(t),
                    t = setTimeout(function() {
                        n.apply(l, Array.prototype.slice.call(s))
                    }, e)
                }
            }
            $(document).ready( () => {
                $(".tabs .tab").on("click", n => {
                    let i = $(n.target)
                      , t = $(".tabs .tab.active")
                      , e = i.data("tab")
                      , l = $(".tab-holder .tab-body.active")
                      , s = $(`.tab-holder .tab-body[data-tab="${e}"]`);
                    t.removeClass("active"),
                    i.addClass("active"),
                    l.removeClass("active"),
                    s.addClass("active")
                }
                ),
                $(".tab-buttons .tab-button").on("click", n => {
                    let i = $(".tab-buttons .tab-button.blue")
                      , t = $(n.target);
                    i.removeClass("blue").addClass("transparent"),
                    t.addClass("blue").removeClass("transparent"),
                    $(".button-tab.active").removeClass("active"),
                    $('.button-tab[data-tab="' + t.data("tab") + '"]').addClass("active")
                }
                );
                try {
                    window.location.hash && $(`.tabs .tab${window.location.hash}`).length > 0 && $(`.tabs .tab${window.location.hash}`).click()
                } catch (n) {}
            }
            ),
            window.debouncer = o
        }
    }, o => {
        var n = t => o(o.s = t)
          , i = (n(5748),
        n(9138))
    }
    ]);
}
