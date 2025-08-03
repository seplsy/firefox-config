/****************************************************************************************
 * Betterfox                                                                            *
 * "Non ducor duco"                                                                     *
 * Priority: Speedy browsing                                                            *
 * Version: 137                                                                         *
 * URL: https://github.com/yokoffing/Betterfox                                          *
 * Custom edits and fine-tuning by sepl                                                 *
 ****************************************************************************************/

/****************************************************************************
 * SECTION: PERFORMANCE & SCROLLING SETTINGS                                *
****************************************************************************/
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);
user_pref("content.notify.ontimer", true);
user_pref("browser.startup.preXulSkeletonUI", false);

user_pref("general.smoothScroll", false);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 0);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 50);
user_pref("mousewheel.min_line_scroll_amount", 40);
user_pref("apz.frame_delay.enabled", false);

user_pref("dom.ipc.processCount.web", 8);
user_pref("dom.ipc.processCount.extension", 1);
user_pref("dom.ipc.keepProcessesAlive.web", 0);

user_pref("browser.tabs.animate", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("layout.css.backdrop-filter.enabled", false);

user_pref("browser.sessionhistory.max_entries", 10);

user_pref("dom.image-lazy-loading.enabled", true);
user_pref("dom.min_background_timeout_value", 1000);
user_pref("dom.timeout.background_throttling_max_budget", 100);

user_pref("network.websocket.max-connections", 5);

/****************************************************************************
 * SECTION: GRAPHICS & GPU ACCELERATION                                     *
****************************************************************************/
user_pref("gfx.webrender.all", true);
user_pref("layers.gpu-process.force-enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);

user_pref("javascript.options.baselinejit", true);

user_pref("media.hardware-video-decoding.enabled", true);

user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);

user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 131072);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);

user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 6000);

user_pref("network.http.pacing.enabled", false);

user_pref("browser.cache.memory.capacity", 16384);
user_pref("browser.cache.memory.max_entry_size", 153600);

/****************************************************************************
 * SECTION: NETWORK SETTINGS                                                *
****************************************************************************/
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.ssl_tokens_cache_capacity", 32768);

user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.file.disable_unc_paths", true);
user_pref("network.gio.supported-protocols", "");

/****************************************************************************
 * SECTION: SECURITY & PRIVACY SETTINGS                                    *
****************************************************************************/
/** Tracking Protection **/
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

user_pref("browser.uitour.enabled", false);

/** OCSP, Certificates & SSL **/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.cert_pinning.enforcement_level", 2);

user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** Disk & Cache Avoidance **/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.privacy_level", 2);

/** Shutdown & Sanitizing **/
user_pref("privacy.history.custom", true);

/** Mixed Content & Cross-site **/
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("permissions.delegation.enabled", false);

/** Headers / Referers **/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** Containers **/
user_pref("privacy.userContext.ui.enabled", true);

/** WebRTC **/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** Safe Browsing **/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/****************************************************************************
 * SECTION: MOZILLA & TELEMETRY - GENERAL SETTINGS                         *
****************************************************************************/
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", true);
user_pref("browser.tabs.firefox-view", false);

user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);

user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** Telemetry & Data Reporting **/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("default-browser-agent.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/****************************************************************************
 * SECTION: UI & USER EXPERIENCE SETTINGS                                  *
****************************************************************************/
/** Mozilla UI tweaks **/
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("app.update.suppressPrompts", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("ui.prefersReducedMotion", 1);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("findbar.highlightAll", true);
user_pref("middlemouse.contentLoadURL", false);
user_pref("browser.privatebrowsing.enable-new-indicator", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

/** Fullscreen settings **/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL Bar suggestions & behavior **/
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

/** New tab page **/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** Pocket integration **/
user_pref("extensions.pocket.enabled", false);

/** PDF settings **/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** Tab behaviors **/
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);

user_pref("layout.css.has-selector.enabled", true);

/****************************************************************************
 * SECTION: MY OVERRIDES                                                   *
****************************************************************************/
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.low_commit_space_threshold_mb", 6553); // Recommended for 8 GB RAM

/****************************************************************************
 * END: BETTERFOX                                                        *
****************************************************************************/
