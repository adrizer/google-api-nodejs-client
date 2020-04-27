// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

export namespace gameservices_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Game Services API
   *
   * Deploy and manage infrastructure for global multiplayer gaming experiences.
   *
   * @example
   * const {google} = require('googleapis');
   * const gameservices = google.gameservices('v1beta');
   *
   * @namespace gameservices
   * @type {Function}
   * @version v1beta
   * @variation v1beta
   * @param {object=} options Options for Gameservices
   */
  export class Gameservices {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    exemptedMembers?: string[] | null;
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    ignoreChildExemptions?: boolean | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Authorization-related information used by Cloud Audit Logging.
   */
  export interface Schema$AuthorizationLoggingOptions {
    /**
     * The type of the permission that was checked.
     */
    permissionType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Write a Cloud Audit log
   */
  export interface Schema$CloudAuditOptions {
    /**
     * Information used by the Cloud Audit Logging pipeline.
     */
    authorizationLoggingOptions?: Schema$AuthorizationLoggingOptions;
    /**
     * The log_name to populate in the Cloud Audit Record.
     */
    logName?: string | null;
  }
  /**
   * A condition to be met.
   */
  export interface Schema$Condition {
    /**
     * Trusted attributes supplied by the IAM system.
     */
    iam?: string | null;
    /**
     * An operator to apply the subject with.
     */
    op?: string | null;
    /**
     * Trusted attributes discharged by the service.
     */
    svc?: string | null;
    /**
     * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
     */
    sys?: string | null;
    /**
     * The objects of the condition.
     */
    values?: string[] | null;
  }
  /**
   * Increment a streamz counter with the specified metric and field names.  Metric names should start with a &#39;/&#39;, generally be lowercase-only, and end in &quot;_count&quot;. Field names should not contain an initial slash. The actual exported metric names will have &quot;/iam/policy&quot; prepended.  Field names correspond to IAM request parameters and field values are their respective values.  Supported field names:    - &quot;authority&quot;, which is &quot;[token]&quot; if IAMContext.token is present,      otherwise the value of IAMContext.authority_selector if present, and      otherwise a representation of IAMContext.principal; or    - &quot;iam_principal&quot;, a representation of IAMContext.principal even if a      token or authority selector is present; or    - &quot;&quot; (empty string), resulting in a counter with no fields.  Examples:   counter { metric: &quot;/debug_access_count&quot;  field: &quot;iam_principal&quot; }   ==&gt; increment counter /iam/policy/debug_access_count                         {iam_principal=[value of IAMContext.principal]}
   */
  export interface Schema$CounterOptions {
    /**
     * Custom fields.
     */
    customFields?: Schema$CustomField[];
    /**
     * The field value to attribute.
     */
    field?: string | null;
    /**
     * The metric to update.
     */
    metric?: string | null;
  }
  /**
   * Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
   */
  export interface Schema$CustomField {
    /**
     * Name is the field name.
     */
    name?: string | null;
    /**
     * Value is the field value. It is important that in contrast to the CounterOptions.field, the value here is a constant that is not derived from the IAMContext.
     */
    value?: string | null;
  }
  /**
   * Write a Data Access (Gin) log
   */
  export interface Schema$DataAccessOptions {
    logMode?: string | null;
  }
  /**
   * The Game Server Cluster changes made by the Game Server Deployment.
   */
  export interface Schema$DeployedClusterState {
    /**
     * The name of the cluster.
     */
    cluster?: string | null;
    /**
     * The details about the Agones fleets and autoscalers created in the Game Server Cluster.
     */
    fleetDetails?: Schema$DeployedFleetDetails[];
  }
  /**
   * Agones fleet specification and details.
   */
  export interface Schema$DeployedFleet {
    /**
     * The name of the Agones fleet.
     */
    fleet?: string | null;
    /**
     * The fleet spec retrieved from the Agones fleet.
     */
    fleetSpec?: string | null;
    /**
     * The source spec that is used to create the Agones fleet. The GameServerConfig resource may no longer exist in the system.
     */
    specSource?: Schema$SpecSource;
    /**
     * The current status of the Agones fleet. Includes count of game servers in various states.
     */
    status?: Schema$DeployedFleetStatus;
  }
  /**
   * Details about the Agones autoscaler.
   */
  export interface Schema$DeployedFleetAutoscaler {
    /**
     * The name of the Agones autoscaler.
     */
    autoscaler?: string | null;
    /**
     * The autoscaler spec retrieved from Agones.
     */
    fleetAutoscalerSpec?: string | null;
    /**
     * The source spec that is used to create the autoscaler. The GameServerConfig resource may no longer exist in the system.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Details of the deployed Agones fleet.
   */
  export interface Schema$DeployedFleetDetails {
    /**
     * Information about the Agones autoscaler for that fleet.
     */
    deployedAutoscaler?: Schema$DeployedFleetAutoscaler;
    /**
     * Information about the Agones fleet.
     */
    deployedFleet?: Schema$DeployedFleet;
  }
  /**
   * DeployedFleetStatus has details about the Agones fleets such as how many are running, how many allocated, and so on.
   */
  export interface Schema$DeployedFleetStatus {
    /**
     * The number of GameServer replicas in the ALLOCATED state in this fleet.
     */
    allocatedReplicas?: string | null;
    /**
     * The number of GameServer replicas in the READY state in this fleet.
     */
    readyReplicas?: string | null;
    /**
     * The total number of current GameServer replicas in this fleet.
     */
    replicas?: string | null;
    /**
     * The number of GameServer replicas in the RESERVED state in this fleet. Reserved instances won&#39;t be deleted on scale down, but won&#39;t cause an autoscaler to scale up.
     */
    reservedReplicas?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Request message for GameServerDeploymentsService.FetchDeploymentState.
   */
  export interface Schema$FetchDeploymentStateRequest {}
  /**
   * Response message for GameServerDeploymentsService.FetchDeploymentState.
   */
  export interface Schema$FetchDeploymentStateResponse {
    /**
     * The state of the Game Server Deployment in each Game Server Cluster.
     */
    clusterState?: Schema$DeployedClusterState[];
    /**
     * List of Locations that could not be reached.
     */
    unavailable?: string[] | null;
  }
  /**
   * Fleet configs for Agones.
   */
  export interface Schema$FleetConfig {
    /**
     * Agones fleet spec. Example spec: `https://agones.dev/site/docs/reference/fleet/`.
     */
    fleetSpec?: string | null;
    /**
     * The name of the FleetConfig.
     */
    name?: string | null;
  }
  /**
   * A Game Server Cluster resource.
   */
  export interface Schema$GameServerCluster {
    /**
     * Game Server Cluster connection information. This information is used to manage Game Server Clusters.
     */
    connectionInfo?: Schema$GameServerClusterConnectionInfo;
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the cluster.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this Game Server Cluster. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The resource name of the Game Server Cluster. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example,  `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The Game Server Cluster connection information.
   */
  export interface Schema$GameServerClusterConnectionInfo {
    /**
     * Reference to the GKE cluster where the game servers are installed.
     */
    gkeClusterReference?: Schema$GkeClusterReference;
    /**
     * Namespace designated on the Game Server Cluster where the Agones game server instances will be created. Existence of the namespace will be validated during creation.
     */
    namespace?: string | null;
  }
  /**
   * A Game Server Config resource.
   */
  export interface Schema$GameServerConfig {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * The description of the Game Server Config.
     */
    description?: string | null;
    /**
     * FleetConfig contains a list of Agones fleet specs. Only one FleetConfig is allowed.
     */
    fleetConfigs?: Schema$FleetConfig[];
    /**
     * The labels associated with this Game Server Config. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the Game Server Config. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`. For example,  `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
     */
    name?: string | null;
    /**
     * The autoscaling settings.
     */
    scalingConfigs?: Schema$ScalingConfig[];
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * A Game Server Config override.
   */
  export interface Schema$GameServerConfigOverride {
    /**
     * The game server config for this override.
     */
    configVersion?: string | null;
    /**
     * Selector for choosing applicable realms.
     */
    realmsSelector?: Schema$RealmSelector;
  }
  /**
   * A Game Server Deployment resource.
   */
  export interface Schema$GameServerDeployment {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the Game Server Deployment.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this Game Server Deployment. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the Game Server Deployment. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The Game Server Deployment Rollout which represents the desired rollout state.
   */
  export interface Schema$GameServerDeploymentRollout {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * The default Game Server Config is applied to all Realms unless overridden in the Rollout. For example,  `projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config`.
     */
    defaultGameServerConfig?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Contains the Game Server Config Rollout overrides. Overrides are processed in the order they are listed. Once a match is found for a Realm, the rest of the list is not processed.
     */
    gameServerConfigOverrides?: Schema$GameServerConfigOverride[];
    /**
     * The resource name of the Game Server Deployment Rollout. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * A reference to a GKE cluster.
   */
  export interface Schema$GkeClusterReference {
    /**
     * The full or partial name of a GKE cluster, using one of the following forms:  * `projects/{project}/locations/{location}/clusters/{cluster}`  * `locations/{location}/clusters/{cluster}`  * `{cluster}` If project and location are not specified, the project and location of the GameServerCluster resource are used to generate the full name of the GKE cluster.
     */
    cluster?: string | null;
  }
  /**
   * The label selector, used to group labels on the resources.
   */
  export interface Schema$LabelSelector {
    /**
     * Resource labels for this selector.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Response message for GameServerClustersService.ListGameServerClusters.
   */
  export interface Schema$ListGameServerClustersResponse {
    /**
     * The list of Game Server Clusters.
     */
    gameServerClusters?: Schema$GameServerCluster[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for GameServerConfigsService.ListGameServerConfigs.
   */
  export interface Schema$ListGameServerConfigsResponse {
    /**
     * The list of Game Server Configs.
     */
    gameServerConfigs?: Schema$GameServerConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for GameServerDeploymentsService.ListGameServerDeployments.
   */
  export interface Schema$ListGameServerDeploymentsResponse {
    /**
     * The list of Game Server Delpoyments.
     */
    gameServerDeployments?: Schema$GameServerDeployment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for RealmsService.ListRealms.
   */
  export interface Schema$ListRealmsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of Realms.
     */
    realms?: Schema$Realm[];
    /**
     * List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * Specifies what kind of log the caller must write
   */
  export interface Schema$LogConfig {
    /**
     * Cloud audit options.
     */
    cloudAudit?: Schema$CloudAuditOptions;
    /**
     * Counter options.
     */
    counter?: Schema$CounterOptions;
    /**
     * Data access options.
     */
    dataAccess?: Schema$DataAccessOptions;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Operation status for gameservices API operations. Operation status is in the form of key-value pairs where keys are resource IDs and the values show the status of the operation. In case of failures, the value includes an error code and error message.
     */
    operationStatus?: {[key: string]: Schema$OperationStatus} | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. List of Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  export interface Schema$OperationStatus {
    /**
     * Output only. Whether the operation is done or still in progress.
     */
    done?: boolean | null;
    /**
     * The error code in case of failures.
     */
    errorCode?: string | null;
    /**
     * The human-readable error message.
     */
    errorMessage?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    iamOwned?: boolean | null;
    /**
     * If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied.   Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is   granted.   Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
     */
    rules?: Schema$Rule[];
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Response message for GameServerClustersService.PreviewCreateGameServerCluster.
   */
  export interface Schema$PreviewCreateGameServerClusterResponse {
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for GameServerClustersService.PreviewDeleteGameServerCluster.
   */
  export interface Schema$PreviewDeleteGameServerClusterResponse {
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for PreviewGameServerDeploymentRollout. This has details about the Agones fleet and autoscaler to be actuated.
   */
  export interface Schema$PreviewGameServerDeploymentRolloutResponse {
    /**
     * ETag of the Game Server Deployment.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
    /**
     * Locations that could not be reached on this request.
     */
    unavailable?: string[] | null;
  }
  /**
   * Response message for RealmsService.PreviewRealmUpdate.
   */
  export interface Schema$PreviewRealmUpdateResponse {
    /**
     * ETag of the realm.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * Response message for GameServerClustersService.PreviewUpdateGameServerCluster
   */
  export interface Schema$PreviewUpdateGameServerClusterResponse {
    /**
     * The ETag of the game server cluster.
     */
    etag?: string | null;
    /**
     * The target state.
     */
    targetState?: Schema$TargetState;
  }
  /**
   * A Realm resource.
   */
  export interface Schema$Realm {
    /**
     * Output only. The creation time.
     */
    createTime?: string | null;
    /**
     * Human readable description of the Realm.
     */
    description?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * The labels associated with this Realm. Each label is a key-value pair.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name of the Realm. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
     */
    name?: string | null;
    /**
     * Required. Time zone where all policies targeting this Realm are evaluated. The value of this field must be from the IANA time zone database: https://www.iana.org/time-zones.
     */
    timeZone?: string | null;
    /**
     * Output only. The last-modified time.
     */
    updateTime?: string | null;
  }
  /**
   * The Realm selector, used to match Realm resources.
   */
  export interface Schema$RealmSelector {
    /**
     * List of Realms to match.
     */
    realms?: string[] | null;
  }
  /**
   * A rule to be applied in a Policy.
   */
  export interface Schema$Rule {
    /**
     * Required
     */
    action?: string | null;
    /**
     * Additional restrictions that must be met. All conditions must pass for the rule to match.
     */
    conditions?: Schema$Condition[];
    /**
     * Human-readable description of the rule.
     */
    description?: string | null;
    /**
     * If one or more &#39;in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
     */
    in?: string[] | null;
    /**
     * The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
     */
    logConfig?: Schema$LogConfig[];
    /**
     * If one or more &#39;not_in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries. The format for in and not_in entries can be found at in the Local IAM documentation (see go/local-iam#features).
     */
    notIn?: string[] | null;
    /**
     * A permission is a string of form &#39;&lt;service&gt;.&lt;resource type&gt;.&lt;verb&gt;&#39; (e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions, and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
     */
    permissions?: string[] | null;
  }
  /**
   * Autoscaling config for an Agones fleet.
   */
  export interface Schema$ScalingConfig {
    /**
     * Required. Agones fleet autoscaler spec. Example spec: https://agones.dev/site/docs/reference/fleetautoscaler/
     */
    fleetAutoscalerSpec?: string | null;
    /**
     * Required. The name of the Scaling Config
     */
    name?: string | null;
    /**
     * The schedules to which this Scaling Config applies.
     */
    schedules?: Schema$Schedule[];
    /**
     * Labels used to identify the Game Server Clusters to which this Agones scaling config applies. A Game Server Cluster is subject to this Agones scaling config if its labels match any of the selector entries.
     */
    selectors?: Schema$LabelSelector[];
  }
  /**
   * The schedule of a recurring or one time event. The event&#39;s time span is specified by start_time and end_time. If the scheduled event&#39;s timespan is larger than the cron_spec + cron_job_duration, the event will be recurring. If only cron_spec + cron_job_duration are specified, the event is effective starting at the local time specified by cron_spec, and is recurring.    start_time|-------[cron job]-------[cron job]-------[cron job]---|end_time   cron job: cron spec start time + duration
   */
  export interface Schema$Schedule {
    /**
     * The duration for the cron job event. The duration of the event is effective after the cron job&#39;s start time.
     */
    cronJobDuration?: string | null;
    /**
     * The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the Realm.
     */
    cronSpec?: string | null;
    /**
     * The end time of the event.
     */
    endTime?: string | null;
    /**
     * The start time of the event.
     */
    startTime?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:  `paths: &quot;bindings, etag&quot;`
     */
    updateMask?: string | null;
  }
  /**
   * Encapsulates Agones fleet spec and Agones autoscaler spec sources.
   */
  export interface Schema$SpecSource {
    /**
     * The Game Server Config resource. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment_id}/configs/{config_id}`.
     */
    gameServerConfigName?: string | null;
    /**
     * The name of the Agones leet config or Agones scaling config used to derive the Agones fleet or Agones autoscaler spec.
     */
    name?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Details about the Agones resources.
   */
  export interface Schema$TargetDetails {
    /**
     * Agones fleet details for Game Server Clusters and Game Server Deployments.
     */
    fleetDetails?: Schema$TargetFleetDetails[];
    /**
     * The Game Server Cluster name. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`.
     */
    gameServerClusterName?: string | null;
    /**
     * The Game Server Deployment name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment_id}`.
     */
    gameServerDeploymentName?: string | null;
  }
  /**
   * Target Agones fleet specification.
   */
  export interface Schema$TargetFleet {
    /**
     * The name of the Agones fleet.
     */
    name?: string | null;
    /**
     * Encapsulates the source of the Agones fleet spec. The Agones fleet spec source.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Target Agones autoscaler policy reference.
   */
  export interface Schema$TargetFleetAutoscaler {
    /**
     * The name of the Agones autoscaler.
     */
    name?: string | null;
    /**
     * Encapsulates the source of the Agones fleet spec. Details about the Agones autoscaler spec.
     */
    specSource?: Schema$SpecSource;
  }
  /**
   * Details of the target Agones fleet.
   */
  export interface Schema$TargetFleetDetails {
    /**
     * Reference to target Agones fleet autoscaling policy.
     */
    autoscaler?: Schema$TargetFleetAutoscaler;
    /**
     * Reference to target Agones fleet.
     */
    fleet?: Schema$TargetFleet;
  }
  /**
   * Encapsulates the Target state.
   */
  export interface Schema$TargetState {
    /**
     * Details about Agones fleets.
     */
    details?: Schema$TargetDetails[];
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    gameServerDeployments: Resource$Projects$Locations$Gameserverdeployments;
    operations: Resource$Projects$Locations$Operations;
    realms: Resource$Projects$Locations$Realms;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.gameServerDeployments = new Resource$Projects$Locations$Gameserverdeployments(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.realms = new Resource$Projects$Locations$Realms(this.context);
    }

    /**
     * gameservices.projects.locations.get
     * @desc Gets information about a location.
     * @alias gameservices.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias gameservices.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {boolean=} params.includeUnrevealedLocations If true, the returned list will include locations which are not yet revealed.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * If true, the returned list will include locations which are not yet revealed.
     */
    includeUnrevealedLocations?: boolean;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Gameserverdeployments {
    context: APIRequestContext;
    configs: Resource$Projects$Locations$Gameserverdeployments$Configs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.configs = new Resource$Projects$Locations$Gameserverdeployments$Configs(
        this.context
      );
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.create
     * @desc Creates a new Game Server Deployment in a given project and Location.
     * @alias gameservices.projects.locations.gameServerDeployments.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.deploymentId Required. The ID of the Game Server Deployment resource to be created.
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     * @param {().GameServerDeployment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/gameServerDeployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.delete
     * @desc Deletes a single Game Server Deployment.
     * @alias gameservices.projects.locations.gameServerDeployments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Deployment to delete. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.fetchDeploymentState
     * @desc Retrieves information about the current state of the Game Server Ddeployment. Gathers all the Agones fleets and Agones autoscalers, including fleets running an older version of the Game Server Deployment.
     * @alias gameservices.projects.locations.gameServerDeployments.fetchDeploymentState
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Deployment. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     * @param {().FetchDeploymentStateRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    fetchDeploymentState(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchDeploymentStateResponse>;
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>,
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate,
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      callback: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void;
    fetchDeploymentState(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchDeploymentStateResponse>,
      callback?: BodyResponseCallback<Schema$FetchDeploymentStateResponse>
    ): void | GaxiosPromise<Schema$FetchDeploymentStateResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:fetchDeploymentState').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchDeploymentStateResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$FetchDeploymentStateResponse>(
          parameters
        );
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.get
     * @desc Gets details of a single Game Server Deployment.
     * @alias gameservices.projects.locations.gameServerDeployments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Deployment to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerDeployment>;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeployment>,
      callback: BodyResponseCallback<Schema$GameServerDeployment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Get,
      callback: BodyResponseCallback<Schema$GameServerDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Get
        | BodyResponseCallback<Schema$GameServerDeployment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeployment>,
      callback?: BodyResponseCallback<Schema$GameServerDeployment>
    ): void | GaxiosPromise<Schema$GameServerDeployment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GameServerDeployment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GameServerDeployment>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias gameservices.projects.locations.gameServerDeployments.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.getRollout
     * @desc Gets details a single Game Server Deployment Rollout.
     * @alias gameservices.projects.locations.gameServerDeployments.getRollout
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Deployment to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerDeploymentRollout>;
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>,
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout,
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      callback: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void;
    getRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerDeploymentRollout>,
      callback?: BodyResponseCallback<Schema$GameServerDeploymentRollout>
    ): void | GaxiosPromise<Schema$GameServerDeploymentRollout> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/rollout').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GameServerDeploymentRollout>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GameServerDeploymentRollout>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.list
     * @desc Lists Game Server Deployments in a given project and Location.
     * @alias gameservices.projects.locations.gameServerDeployments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to apply to list results.
     * @param {string=} params.orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerDeployments left to be queried.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerDeploymentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$List,
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$List
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>,
      callback?: BodyResponseCallback<Schema$ListGameServerDeploymentsResponse>
    ): void | GaxiosPromise<Schema$ListGameServerDeploymentsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/gameServerDeployments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGameServerDeploymentsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListGameServerDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.patch
     * @desc Patches a Game Server Deployment.
     * @alias gameservices.projects.locations.gameServerDeployments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Game Server Deployment. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment`.
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().GameServerDeployment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.previewRollout
     * @desc Previews the Game Server Deployment Rollout. This API does not mutate the Rollout resource.
     * @alias gameservices.projects.locations.gameServerDeployments.previewRollout
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Game Server Deployment Rollout. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment/rollout`.
     * @param {string=} params.previewTime Optional. The target timestamp to compute the preview. Defaults to the immediately after the proposed Rollout completes.
     * @param {string=} params.updateMask Optional. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().GameServerDeploymentRollout} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    previewRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewGameServerDeploymentRolloutResponse>;
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$PreviewGameServerDeploymentRolloutResponse
          >,
      callback: BodyResponseCallback<
        Schema$PreviewGameServerDeploymentRolloutResponse
      >
    ): void;
    previewRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout,
      callback: BodyResponseCallback<
        Schema$PreviewGameServerDeploymentRolloutResponse
      >
    ): void;
    previewRollout(
      callback: BodyResponseCallback<
        Schema$PreviewGameServerDeploymentRolloutResponse
      >
    ): void;
    previewRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout
        | BodyResponseCallback<
            Schema$PreviewGameServerDeploymentRolloutResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$PreviewGameServerDeploymentRolloutResponse
          >,
      callback?: BodyResponseCallback<
        Schema$PreviewGameServerDeploymentRolloutResponse
      >
    ): void | GaxiosPromise<Schema$PreviewGameServerDeploymentRolloutResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/rollout:preview').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreviewGameServerDeploymentRolloutResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$PreviewGameServerDeploymentRolloutResponse
        >(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @alias gameservices.projects.locations.gameServerDeployments.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias gameservices.projects.locations.gameServerDeployments.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.updateRollout
     * @desc Patches a single Game Server Deployment Rollout. The method will not return an error if the update does not affect any existing realms. For example - if the default_game_server_config is changed but all existing realms use the override, that is valid. Similarly, if a non existing realm is explicitly called out in game_server_config_overrides field, that will also not result in an error.
     * @alias gameservices.projects.locations.gameServerDeployments.updateRollout
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Game Server Deployment Rollout. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment/rollout`.
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().GameServerDeploymentRollout} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateRollout(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRollout(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRollout(callback: BodyResponseCallback<Schema$Operation>): void;
    updateRollout(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/rollout').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Game Server Deployment resource to be created.
     */
    deploymentId?: string;
    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeployment;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Deployment to delete. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Fetchdeploymentstate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Deployment. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchDeploymentStateRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Deployment to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Getrollout
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Deployment to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerDeployments left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Game Server Deployment. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeployment;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Previewrollout
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Game Server Deployment Rollout. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview. Defaults to the immediately after the proposed Rollout completes.
     */
    previewTime?: string;
    /**
     * Optional. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeploymentRollout;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Updaterollout
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Game Server Deployment Rollout. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/rollout`. For example,  `projects/my-project/locations/{location}/gameServerDeployments/my-deployment/rollout`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerDeploymentRollout;
  }

  export class Resource$Projects$Locations$Gameserverdeployments$Configs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.configs.create
     * @desc Creates a new Game Server Config in a given project, Location, and Game Server Deployment. Game Server Configs are immutable, and are not applied until referenced in the Game Server Deployment Rollout resource.
     * @alias gameservices.projects.locations.gameServerDeployments.configs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.configId Required. The ID of the Game Server Config resource to be created.
     * @param {string} params.parent Required. The parent resource name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/`.
     * @param {().GameServerConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/configs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.configs.delete
     * @desc Deletes a single Game Server Config. The deletion will fail if the Game Server Config is referenced in a Game Server Deployment Rollout.
     * @alias gameservices.projects.locations.gameServerDeployments.configs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Config to delete. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.configs.get
     * @desc Gets details of a single Game Server Config.
     * @alias gameservices.projects.locations.gameServerDeployments.configs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Config to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerConfig>;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GameServerConfig>,
      callback: BodyResponseCallback<Schema$GameServerConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get,
      callback: BodyResponseCallback<Schema$GameServerConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get
        | BodyResponseCallback<Schema$GameServerConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerConfig>,
      callback?: BodyResponseCallback<Schema$GameServerConfig>
    ): void | GaxiosPromise<Schema$GameServerConfig> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GameServerConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GameServerConfig>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.gameServerDeployments.configs.list
     * @desc Lists Game Server Configs in a given project, Location, and Game Server Deployment.
     * @alias gameservices.projects.locations.gameServerDeployments.configs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to apply to list results.
     * @param {string=} params.orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The parent resource name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List,
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListGameServerConfigsResponse>
    ): void | GaxiosPromise<Schema$ListGameServerConfigsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/configs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGameServerConfigsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListGameServerConfigsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Game Server Config resource to be created.
     */
    configId?: string;
    /**
     * Required. The parent resource name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerConfig;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Config to delete. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Config to retrieve. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/{config}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gameserverdeployments$Configs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/x`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gameservices.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias gameservices.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias gameservices.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias gameservices.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias gameservices.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Realms {
    context: APIRequestContext;
    gameServerClusters: Resource$Projects$Locations$Realms$Gameserverclusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.gameServerClusters = new Resource$Projects$Locations$Realms$Gameserverclusters(
        this.context
      );
    }

    /**
     * gameservices.projects.locations.realms.create
     * @desc Creates a new Realm in a given project and Location.
     * @alias gameservices.projects.locations.realms.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     * @param {string=} params.realmId Required. The ID of the Realm resource to be created.
     * @param {().Realm} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Realms$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Realms$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/realms').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.delete
     * @desc Deletes a single Realm.
     * @alias gameservices.projects.locations.realms.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Realm to delete. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Realms$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.get
     * @desc Gets details of a single Realm.
     * @alias gameservices.projects.locations.realms.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Realm to retrieve. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Realms$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Realm>;
    get(
      params: Params$Resource$Projects$Locations$Realms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Realm>,
      callback: BodyResponseCallback<Schema$Realm>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Get,
      callback: BodyResponseCallback<Schema$Realm>
    ): void;
    get(callback: BodyResponseCallback<Schema$Realm>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Get
        | BodyResponseCallback<Schema$Realm>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Realm>,
      callback?: BodyResponseCallback<Schema$Realm>
    ): void | GaxiosPromise<Schema$Realm> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Realm>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Realm>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.list
     * @desc Lists Realms in a given project and Location.
     * @alias gameservices.projects.locations.realms.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to apply to list results.
     * @param {string=} params.orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more Realms left to be queried.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Realms$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRealmsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Realms$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRealmsResponse>,
      callback: BodyResponseCallback<Schema$ListRealmsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$List,
      callback: BodyResponseCallback<Schema$ListRealmsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRealmsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$List
        | BodyResponseCallback<Schema$ListRealmsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRealmsResponse>,
      callback?: BodyResponseCallback<Schema$ListRealmsResponse>
    ): void | GaxiosPromise<Schema$ListRealmsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/realms').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRealmsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRealmsResponse>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.patch
     * @desc Patches a single Realm.
     * @alias gameservices.projects.locations.realms.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Realm. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
     * @param {string=} params.updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().Realm} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Realms$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.previewUpdate
     * @desc Previews patches to a single Realm.
     * @alias gameservices.projects.locations.realms.previewUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Realm. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
     * @param {string=} params.previewTime Optional. The target timestamp to compute the preview.
     * @param {string=} params.updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().Realm} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    previewUpdate(
      params?: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewRealmUpdateResponse>;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>,
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Previewupdate,
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      callback: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void;
    previewUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Previewupdate
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewRealmUpdateResponse>,
      callback?: BodyResponseCallback<Schema$PreviewRealmUpdateResponse>
    ): void | GaxiosPromise<Schema$PreviewRealmUpdateResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Previewupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Previewupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:previewUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreviewRealmUpdateResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PreviewRealmUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Realms$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     */
    parent?: string;
    /**
     * Required. The ID of the Realm resource to be created.
     */
    realmId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }
  export interface Params$Resource$Projects$Locations$Realms$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Realm to delete. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Realm to retrieve. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more Realms left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Realm. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
     */
    name?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }
  export interface Params$Resource$Projects$Locations$Realms$Previewupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Realm. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`. For example, `projects/my-project/locations/{location}/realms/my-realm`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
    /**
     * Required. The update mask applies to the resource. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Realm;
  }

  export class Resource$Projects$Locations$Realms$Gameserverclusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.create
     * @desc Creates a new game server cluster in a given project and location.
     * @alias gameservices.projects.locations.realms.gameServerClusters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.gameServerClusterId Required. The ID of the Game Server Cluster resource to be created.
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}/realms/{realm-id}`.
     * @param {().GameServerCluster} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/gameServerClusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.delete
     * @desc Deletes a single game server cluster.
     * @alias gameservices.projects.locations.realms.gameServerClusters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Cluster to delete. Uses the form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.get
     * @desc Gets details of a single game server cluster.
     * @alias gameservices.projects.locations.realms.gameServerClusters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Cluster to retrieve. Uses the form:  `projects/{project}/locations/{location}/realms/{realm-id}/gameServerClusters/{cluster}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GameServerCluster>;
    get(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GameServerCluster>,
      callback: BodyResponseCallback<Schema$GameServerCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get,
      callback: BodyResponseCallback<Schema$GameServerCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$GameServerCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get
        | BodyResponseCallback<Schema$GameServerCluster>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GameServerCluster>,
      callback?: BodyResponseCallback<Schema$GameServerCluster>
    ): void | GaxiosPromise<Schema$GameServerCluster> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GameServerCluster>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GameServerCluster>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.list
     * @desc Lists Game Server Clusters in a given project and location.
     * @alias gameservices.projects.locations.realms.gameServerClusters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. The filter to apply to list results.
     * @param {string=} params.orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     * @param {integer=} params.pageSize Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerClusters left to be queried.
     * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The parent resource name. Uses the form: "projects/{project}/locations/{location}/realms/{realm}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGameServerClustersResponse>;
    list(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>,
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$List,
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$List
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGameServerClustersResponse>,
      callback?: BodyResponseCallback<Schema$ListGameServerClustersResponse>
    ): void | GaxiosPromise<Schema$ListGameServerClustersResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/gameServerClusters').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGameServerClustersResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListGameServerClustersResponse>(
          parameters
        );
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.patch
     * @desc Patches a single game server cluster.
     * @alias gameservices.projects.locations.realms.gameServerClusters.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the Game Server Cluster. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example,  `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().GameServerCluster} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.previewCreate
     * @desc Previews creation of a new game server cluster in a given project and location.
     * @alias gameservices.projects.locations.realms.gameServerClusters.previewCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.gameServerClusterId Required. The ID of the Game Server Cluster resource to be created.
     * @param {string} params.parent Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     * @param {string=} params.previewTime Optional. The target timestamp to compute the preview.
     * @param {().GameServerCluster} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    previewCreate(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewCreateGameServerClusterResponse>;
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>,
      callback: BodyResponseCallback<
        Schema$PreviewCreateGameServerClusterResponse
      >
    ): void;
    previewCreate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate,
      callback: BodyResponseCallback<
        Schema$PreviewCreateGameServerClusterResponse
      >
    ): void;
    previewCreate(
      callback: BodyResponseCallback<
        Schema$PreviewCreateGameServerClusterResponse
      >
    ): void;
    previewCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewCreateGameServerClusterResponse>,
      callback?: BodyResponseCallback<
        Schema$PreviewCreateGameServerClusterResponse
      >
    ): void | GaxiosPromise<Schema$PreviewCreateGameServerClusterResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta/{+parent}/gameServerClusters:previewCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreviewCreateGameServerClusterResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PreviewCreateGameServerClusterResponse>(
          parameters
        );
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.previewDelete
     * @desc Previews deletion of a single game server cluster.
     * @alias gameservices.projects.locations.realms.gameServerClusters.previewDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the Game Server Cluster to delete. Uses the form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
     * @param {string=} params.previewTime Optional. The target timestamp to compute the preview.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    previewDelete(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewDeleteGameServerClusterResponse>;
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>,
      callback: BodyResponseCallback<
        Schema$PreviewDeleteGameServerClusterResponse
      >
    ): void;
    previewDelete(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete,
      callback: BodyResponseCallback<
        Schema$PreviewDeleteGameServerClusterResponse
      >
    ): void;
    previewDelete(
      callback: BodyResponseCallback<
        Schema$PreviewDeleteGameServerClusterResponse
      >
    ): void;
    previewDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewDeleteGameServerClusterResponse>,
      callback?: BodyResponseCallback<
        Schema$PreviewDeleteGameServerClusterResponse
      >
    ): void | GaxiosPromise<Schema$PreviewDeleteGameServerClusterResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:previewDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreviewDeleteGameServerClusterResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PreviewDeleteGameServerClusterResponse>(
          parameters
        );
      }
    }

    /**
     * gameservices.projects.locations.realms.gameServerClusters.previewUpdate
     * @desc Previews updating a GameServerCluster.
     * @alias gameservices.projects.locations.realms.gameServerClusters.previewUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the Game Server Cluster. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example,  `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     * @param {string=} params.previewTime Optional. The target timestamp to compute the preview.
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     * @param {().GameServerCluster} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    previewUpdate(
      params?: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PreviewUpdateGameServerClusterResponse>;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>,
      callback: BodyResponseCallback<
        Schema$PreviewUpdateGameServerClusterResponse
      >
    ): void;
    previewUpdate(
      params: Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate,
      callback: BodyResponseCallback<
        Schema$PreviewUpdateGameServerClusterResponse
      >
    ): void;
    previewUpdate(
      callback: BodyResponseCallback<
        Schema$PreviewUpdateGameServerClusterResponse
      >
    ): void;
    previewUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PreviewUpdateGameServerClusterResponse>,
      callback?: BodyResponseCallback<
        Schema$PreviewUpdateGameServerClusterResponse
      >
    ): void | GaxiosPromise<Schema$PreviewUpdateGameServerClusterResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gameservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:previewUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PreviewUpdateGameServerClusterResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PreviewUpdateGameServerClusterResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Game Server Cluster resource to be created.
     */
    gameServerClusterId?: string;
    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}/realms/{realm-id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Cluster to delete. Uses the form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Cluster to retrieve. Uses the form:  `projects/{project}/locations/{location}/realms/{realm-id}/gameServerClusters/{cluster}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The filter to apply to list results.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerClusters left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Uses the form: "projects/{project}/locations/{location}/realms/{realm}".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the Game Server Cluster. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example,  `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewcreate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the Game Server Cluster resource to be created.
     */
    gameServerClusterId?: string;
    /**
     * Required. The parent resource name. Uses the form: `projects/{project}/locations/{location}/realms/{realm}`.
     */
    parent?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the Game Server Cluster to delete. Uses the form: `projects/{project}/locations/{location}/gameServerClusters/{cluster}`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
  }
  export interface Params$Resource$Projects$Locations$Realms$Gameserverclusters$Previewupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the Game Server Cluster. Uses the form:  `projects/{project}/locations/{location}/realms/{realm}/gameServerClusters/{cluster}`. For example,  `projects/my-project/locations/{location}/realms/zanzibar/gameServerClusters/my-onprem-cluster`.
     */
    name?: string;
    /**
     * Optional. The target timestamp to compute the preview.
     */
    previewTime?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see  https: //developers.google.com/protocol-buffers // /docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GameServerCluster;
  }
}