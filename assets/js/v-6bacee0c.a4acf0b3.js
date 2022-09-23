"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40137],{70649:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-6bacee0c",path:"/devices/SLR2c.html",title:"Hive SLR2c control via MQTT",lang:"en-US",frontmatter:{title:"Hive SLR2c control via MQTT",description:"Integrate your Hive SLR2c via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate (heat endpoint)",slug:"climate-heat-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold (binary, heat endpoint)",slug:"temperature-setpoint-hold-binary-heat-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold_duration (numeric, heat endpoint)",slug:"temperature-setpoint-hold-duration-numeric-heat-endpoint",children:[]},{level:3,title:"Climate (water endpoint)",slug:"climate-water-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold (binary, water endpoint)",slug:"temperature-setpoint-hold-binary-water-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold_duration (numeric, water endpoint)",slug:"temperature-setpoint-hold-duration-numeric-water-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLR2c.md",git:{updatedTime:1663946061e3}}},55291:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var d=o(66252);const a=(0,d.uE)('<h1 id="hive-slr2c" tabindex="-1"><a class="header-anchor" href="#hive-slr2c" aria-hidden="true">#</a> Hive SLR2c</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLR2c</td></tr><tr><td>Vendor</td><td>Hive</td></tr><tr><td>Description</td><td>Dual channel heating and hot water thermostat</td></tr><tr><td>Exposes</td><td>climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLR2c.jpg" alt="Hive SLR2c"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),i=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-heat-endpoint" aria-hidden="true">#</a> Climate (heat endpoint)</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_heat&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_heat&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_heat&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_heat&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-heat-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold (binary, heat endpoint)</h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_setpoint_hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-heat-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold_duration (numeric, heat endpoint)</h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="climate-water-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-water-endpoint" aria-hidden="true">#</a> Climate (water endpoint)</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>22</code> and <code>22</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_water&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_water&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>, <code>emergency_heating</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_water&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_water&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-water-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold (binary, water endpoint)</h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_setpoint_hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-water-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold_duration (numeric, water endpoint)</h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),r={},n=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[a,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[i])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);